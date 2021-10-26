import React, { useState, useCallback } from "react";
import MovieGrid from "../movie_grid";
import "./searchbar.css";
import search from "../../images/search.png";
import getMovies from "../getMovies";

const SearchBar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const debounce = (func, timeout) => {
    let timer;

    return function () {
      let ctx = this;
      let args = arguments;
      clearTimeout(timer);

      timer = setTimeout(() => {
        func.apply(ctx, args);
      }, timeout);
    };
  };

  
  
  const getSearch = async(query) => {
      await getMovies("search", query).then((res) => {
          console.log(res)
          setSearchResults(res);
        });
    };
    
    const debounceDropdown = useCallback(debounce((nextValue) => getSearch(nextValue), 500), [])

  const handleInput = (e) => {
    const query = e.target.value.split(" ").join("+");
    debounceDropdown(query);
  };

  return (
    <div>
      <form className="form">
        <input
          className="search-field"
          type="text"
          onChange={handleInput}
          placeholder="Search for a movie"
        />
        <img className="search-icon" src={search} alt="search-img" />
      </form>
      {/* <div className="search-dropdown">
        <ul className="search-results">
          {searchResults.length
            ? searchResults.map((movie, i) => {
                return <li key={i}> {movie.title}</li>;
              })
            : []}
        </ul>
      </div> */}
      <MovieGrid header={"Search Results"} movieList={searchResults}/>
    </div>
  );
};

export default SearchBar;
