import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN = process.env.REACT_APP_MOVIE_DB_TOKEN;

export async function searchMovies(query, page = 0){
  return axios.get(`${API_URL}/search/movie?api_key=${API_TOKEN}&query=${query}`);
}

export async function latestMovies(){
  return axios.get(`${API_URL}/movie/popular?api_key=${API_TOKEN}`);
}
export async function fetchData(query, setLoading, setData){
  setLoading(true);
  if(query == "" || query == null){
    latestMovies().then(r => {
      setData(r.data.results) 
      setLoading(false);
    });
  }
  else{
    searchMovies(query).then(r => {
      setData(r.data.results) 
      setLoading(false);
    });
  }
}