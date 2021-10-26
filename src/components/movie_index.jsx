import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./movie_card";
import getMovies from "./getMovies"


const MovieIndex = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
      getMovies().then(res => {
          setMovieList(res)
      })
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
