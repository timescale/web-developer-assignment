import { useEffect, useState } from "react";
import NavBar from "./navbar";
import MovieGrid from "./movie_grid";
import SearchBar from "./SearchBar/search_bar";
import getMovies from "../utils/getMovies";

const App = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const movieList = searchResults.length ? searchResults : recentMovies;
  const header = searchResults.length ? "Search Results" : "Recent Movies";
  const request = searchResults.length ? "search" : "recent";
  const action = searchResults.length ? setSearchResults : setRecentMovies;
 
  useEffect(() => {
    getMovies(request).then((res) => {
      action(res);
    });
  }, []);

  console.log("list", movieList)
  return (
    <div className="main">
      <NavBar />
      <SearchBar setSearchResults={setSearchResults}/>
      <MovieGrid header={header} movieList={movieList}/>
    </div>
  );
};

export default App;
