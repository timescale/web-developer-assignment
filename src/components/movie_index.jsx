import React, { useEffect, useState } from "react";

import getMovies from "./getMovies"
import MovieGrid from "./movie_grid";


const MovieIndex = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
      getMovies("recent").then(res => {
          setMovieList(res)
      })
  }, []);



  return (
      <MovieGrid movieList={movieList} header={"Most Recent Movies"}/> 

  );
};

export default MovieIndex;
