import React from "react";
import styled from "styled-components";
import MovieCard from "./movie_card";

const Header = styled.h1`
  font-family: Inter;
  font-size: 1.9rem;
`;

const MovieGrid = ({ movieList, header }) => {
  return (
    <div className="movie-grid-container">
      <Header>{header}</Header>
      <ul className="movie-grid">
        {movieList.map((movie, i) => (
          <MovieCard key={i} movieInfo={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieGrid;
