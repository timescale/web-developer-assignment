import { useEffect, useState } from "react";
import NavBar from "./NavBar/navbar";
import MovieGrid from "./Movies/movie_grid";
import SearchBar from "./SearchBar/search_bar";
import getMovies from "../utils/getMovies";

const App = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const movieList = searchResults.length ? searchResults : recentMovies;
  const header = searchResults.length ? "Search Results" : "Most Recent Movies";
  const request = searchResults.length ? "search" : "recent";
  const action = searchResults.length ? setSearchResults : setRecentMovies;

  useEffect(() => {
    getMovies(request).then((res) => {
      action(res);
    });
  }, []);

  return (
    <div className="main">
      <div className="nav-container">
        <NavBar setSearchResults={setSearchResults} />
        <SearchBar setSearchResults={setSearchResults} />
      </div>
      <MovieGrid header={header} movieList={movieList} />
    </div>
  );
};

export default App;
