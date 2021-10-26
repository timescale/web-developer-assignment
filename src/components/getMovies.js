import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/";

export default async function getMovies(request, query=null) {
  const recentMoviesUrl = `${baseUrl}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const searchUrl = `${baseUrl}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  
  const url = request === "recent" ? recentMoviesUrl : searchUrl;
  const response = axios.get(url);

  const movies = await response;
  return movies.data.results;
}
