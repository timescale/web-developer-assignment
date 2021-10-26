import React from "react";
import { Header } from './movieComponents';
import MovieCard from "./movie_card";
import "./movie.css";


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
