import { get } from "axios";

const getMovies = async () => {
  try {
    let moviesUrl = await get(
      `${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`
    );
    return moviesUrl;
  } catch (err) {
    return `Error fetching movies`;
  }
};

const searchMovie = async (input) => {
  try {
    let searchUrl = await get(
      `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${input}`
    );
    return searchUrl;
  } catch (err) {
    return `Error searching for this movie " ${input} "`;
  }
};

export { getMovies, searchMovie };
