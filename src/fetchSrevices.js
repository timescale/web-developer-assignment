import Axios from 'axios'
const BaseUrl = "https://api.themoviedb.org/3/movie/top_rated"
const SearchUrl = "https://api.themoviedb.org/3/search/movie"
const ApiKey = "7315ec59ea2264da1fa4f4eb8d647853"

const getData = async (pageNo) => {
    try {
      const response = await Axios.get(`${BaseUrl}?api_key=${ApiKey}&page=${pageNo}`);
      var result = response.data.results;
      return result;
    } catch (e) {
      return false;
    }
  };

  const searchData = async (name) => {
    try {
      const response = await Axios.get(`${SearchUrl}?api_key=${ApiKey}&query=${name}`);
      var result = response.data.results;
      return result;
    } catch (e) {
      return false;
    }
  };


export {getData,searchData}