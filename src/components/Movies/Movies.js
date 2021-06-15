import React, { Component } from "react";

// Components
import MovieCard from "./Movie/MovieCard";
import Aux from ".././../hoc/Aux/Aux";
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../UI/Modal/Modal";

// Styles
import styles from "./styles/Movies.module.css";

//  Misc
import { getMovies, searchMovie } from "../../utils/MoviesApi";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchedMovies: [],
      selectedMovie: [],
      modal: false,
      searchInput: "",
      typicode: { error: false, message: null },
    };
  }

  async componentDidMount() {
    try {
      const fetchedMovies = await getMovies();

      if (fetchedMovies.status === 200) {
        const result = fetchedMovies.data.results;
        this.setState({
          movies: [...this.state.movies, ...result],
        });
      }
    } catch (error) {
      this.setState({ typicode: { error: true, message: error.message } });
    }
  }

  async componentDidUpdate(prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      if (this.state.searchInput.trim().length > 0) {
        let foundSearch = [];
        try {
          let movieSearched = await searchMovie(this.state.searchInput);

          if (movieSearched.status !== 200) return false;

          foundSearch = movieSearched.data.results;

          if (foundSearch.length > 0)
            this.setState({
              searchedMovies: [...foundSearch],
            });
        } catch (error) {
          return `${error}`;
        }
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

    let returnedMovies = <p>Fetching posts error : {typicode.message}</p>;
    let modalInformation = <p>Fetching more information failed to load</p>;
    let displayTitle = "Most Recent Movies";
    let errorFetchingSearch = "";

    const renderMovie = (arr) => {
      returnedMovies = arr.map(
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
      modalInformation = selectedMovie.map(
        ({
          title,
          poster_path,
          overview,
          id,
          vote_average,
          vote_count,
          release_date,
        }) => {
          return (
            <Modal
              title={title}
              id={id}
              poster_path={poster_path}
              release_date={release_date}
              overview={overview}
              vote_average={vote_average}
              vote_count={vote_count}
              closeModal={this.closeModalHandler}
            />
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
          {modalInformation}
        </section>
        <header>
          <img src={this.props.logo} alt="Timescale" />
          <SearchBar
            value={searchInput}
            placeholder="Search for a Movie"
            onChange={(e) =>
              this.setState({
                searchInput: e.target.value,
              })
            }
          />
        </header>
        <main className={styles.Movies}>
          <h1 className={styles.Movies__text}>{displayTitle}</h1>
          <p className={displayError}>{errorFetchingSearch}</p>
          <section className={styles.Movie}>{returnedMovies}</section>
        </main>
      </Aux>
    );
  }
}

export default Movies;
