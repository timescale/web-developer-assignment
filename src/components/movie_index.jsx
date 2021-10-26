import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieCard from "./movie_card";


const MovieIndex = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getMovies();
      console.log(response);
    }
    return fetchData();
  }, []);

  const Header = styled.h1`
    font-family: Inter;
    font-size: 1.9rem;
  `;

  return (
    <div className="movie-index">
      <Header>Most Recent Movies</Header>
      <ul className="movie-index-list">
        {movieList.map((movie, i) => (
          <MovieCard key={i} movieInfo={movie}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieIndex;
