import React, { Component } from "react";
import axios from "axios";
import moment from "moment";

// Components
import MovieCard from "./Movie/MovieCard";
import Aux from ".././../hoc/Aux/Aux";
import SearchBar from "../SearchBar/SearchBar";

// Styles
import styles from "./styles/Movies.module.css";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchedMovies: [],
      selectedMovie: [],
      latestId: null,
      modal: false,
      searchInput: "",
      typicode: { error: false, message: null },
    };
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API_DOMAIN}/movie/latest?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
      )
      .then((res) => {
        const fetchedMovies = res.data;
        this.setState({
          latestId: fetchedMovies["id"],
        });
        // let totalMovie = this.state.latestId;
        let totalMovie = 100;
        for (let i = 0; i <= totalMovie; i++) {
          axios
            .get(
              `${process.env.REACT_APP_API_DOMAIN}/movie/${i}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
            )
            .then((res) => {
              let { adult, poster_path, release_date, vote_average } = res.data;
              let filteredMovies = [];

              if (res.status !== 200) return false;

              if (
                !adult &&
                poster_path &&
                release_date !== "" &&
                vote_average !== null
              ) {
                // let now = new Date().getFullYear();
                // let movieYear = moment(release_date).year();
                // if (now - movieYear <= 2 && now - movieYear >= 1)
                filteredMovies.push(res.data);
              } else return false;

              this.setState({
                movies: [...this.state.movies, ...filteredMovies],
              });
            })
            .catch((error) => {
              console.clear();
              return `Movies error: ${error}`;
            });
        }
      })
      .catch((error) => {
        this.setState({ typicode: { error: true, message: error.message } });
      });
  }

  componentDidUpdate(prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      if (this.state.searchInput.trim().length > 0) {
        let searchedMovie = [];
        let foundSearch = null;
        axios
          .get(
            `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${this.state.searchInput}`
          )
          .then((res) => {
            let { adult, poster_path, release_date, vote_average } =
              res.data.results;

            if (res.status !== 200) return false;

            if (
              !adult &&
              poster_path !== null &&
              release_date !== "" &&
              vote_average !== null
            )
              foundSearch = res.data.results;
            else return false;
            foundSearch.forEach((movie) => searchedMovie.push(movie));
            this.setState({
              searchedMovies: [...searchedMovie],
            });
          })
          .catch((error) => `Searching for movies error: ${error}`);
      }
    }
  }

  movieSelectedHandler = (preview) => {
    this.setState({
      modal: true,
      selectedMovie: [{ ...preview }],
    });
  };

  closeModalHandler = () => {
    this.setState({
      modal: false,
    });
  };

  render() {
    let {
      movies,
      selectedMovie,
      typicode,
      modal,
      searchInput,
      searchedMovies,
    } = this.state;

    let moviesArray = <p>Fetching posts error : {typicode.message}</p>;
    let movieInformation = <p>Fetching more information failed to load</p>;
    let displayTitle = "Most Recent Movies";
    let errorFetchingSearch = "";

    const renderMovie = (arr) => {
      moviesArray = arr.map(
        (
          {
            release_date,
            title,
            original_language,
            poster,
            id,
            poster_path,
            vote_average,
          },
          index,
          arr
        ) => (
          <Aux>
            <MovieCard
              release_date={release_date}
              title={title}
              rating={vote_average}
              original_language={original_language}
              poster={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/${poster_path}`}
              keyed={`${title}_${release_date}_${id}`}
              clicked={() => this.movieSelectedHandler(arr[index])}
            />
          </Aux>
        )
      );
    };

    if (selectedMovie.length > 0)
      movieInformation = selectedMovie.map(
        ({
          title,
          poster_path,
          overview,
          genres,
          id,
          original_language,
          vote_average,
          vote_count,
          release_date,
        }) => {
          let gen = "";
          if (genres !== undefined) {
            genres.forEach((genre) => {
              if (genre !== undefined) gen += `${genre.name} `;
              else return false;
            });
            gen = gen.trim().replace(/[" "]/g, ", ");
          } else gen = `No genre found!!`;

          return (
            <div key={`${title}_${id}`} className={styles.Modal__information}>
              <div className={styles.image}>
                <img
                  src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}/${poster_path}`}
                  alt={title}
                />
              </div>
              <div className={styles.details}>
                <p className={styles.details__title}>
                  <span>Title : </span>
                  {title}
                </p>
                <p className={styles.details__title}>
                  <span>Release date : </span>
                  {moment(release_date).format("LL")}
                </p>
                <p className={styles.details__overview}>
                  <span className={styles.details__overview___view}>
                    Overview :{" "}
                  </span>
                  {overview}
                </p>
                <p className={styles.details__genre}>
                  <span>Genre : </span>
                  {gen}
                </p>
                <p className={styles.details__language}>
                  <span>Language : </span>
                  {original_language}
                </p>
                <p className={styles.details__language}>
                  <span>Rating : </span>
                  <b>{vote_average} / 10 </b>
                  <small>({vote_count} total votes)</small>
                </p>
                <div className={styles.closeBtn}>
                  <button onClick={this.closeModalHandler}>Close</button>
                </div>
              </div>
            </div>
          );
        }
      );

    if (searchInput.trim().length > 0) {
      displayTitle = `Search result for " ${searchInput.toUpperCase()} "`;
      renderMovie(searchedMovies);
      if (searchedMovies.length < 1)
        errorFetchingSearch = `No results matches your search for "${searchInput}"`;
    } else renderMovie(movies);

    let modalActivity = styles.Close;
    if (modal) modalActivity = styles.Open;

    let displayError = styles.FoundSearch;
    if (searchInput.trim().length > 0 && searchedMovies.length < 1)
      displayError = styles.NoSearch;

    return (
      <Aux>
        <section className={[styles.Modal, modalActivity].join(" ")}>
          {movieInformation}
        </section>
        <header>
          <img src={this.props.logo} alt="Timescale" />
          <SearchBar
            placeholder="Search for a Movie"
            onChange={(e) =>
              this.setState({
                searchInput: e.target.value,
              })
            }
            value={searchInput}
          />
        </header>
        <main className={styles.Movies}>
          <h1 className={styles.Movies__text}>{displayTitle}</h1>
          <p className={displayError}>{errorFetchingSearch}</p>
          <section className={styles.Movie}>{moviesArray}</section>
        </main>
      </Aux>
    );
  }
}

export default Movies;
