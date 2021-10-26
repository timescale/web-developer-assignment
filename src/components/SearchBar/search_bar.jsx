import React, { useState, useCallback } from "react";
import "./searchbar.css";
import search from "../../images/search.png";
import getMovies from "../../utils/getMovies";
import debounce from "../../utils/debounceFunction";

const SearchBar = (props) => {
  const [dropdown, setDropdown] = useState([]);
  console.log(props)

  const getSearch = async (query) => {
    await getMovies("search", query).then((res) => {
      setDropdown(res);
      props.setSearchResults(res)
    });
  };

  const debounceDropdown = useCallback(
    debounce((nextValue) => getSearch(nextValue), 500),
    []
  );

  const handleInput = (e) => {
    if(e.target.value === "") {
        props.setSearchResults([])
        setDropdown([])
    }
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
      <div className="search-dropdown">
        <ul className="search-results">
          {dropdown.length
            ? dropdown.map((movie, i) => {
                return <li key={i}> {movie.title}</li>;
              })
            : []}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
