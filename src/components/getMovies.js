import axios from "axios";

export default async function getMovies() {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  );

  const movies = await response;
  return movies.data.results
};
