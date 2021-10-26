import React, { useState, useCallback } from "react";
import "./searchbar.css";
import search from "../../images/search.png";
import getMovies from "../../utils/getMovies";
import debounce from "../../utils/debounceFunction";

const SearchBar = (props) => {
  const [dropdown, setDropdown] = useState([]);
  const [input, setInput] = useState("");

  const getSearch = async (query) => {
    await getMovies("search", query).then((res) => {
      setDropdown(res);
      props.setSearchResults(res);
    });
  };

  const debounceDropdown = useCallback(
    debounce((nextValue) => getSearch(nextValue), 500),
    []
  );

  const handleInput = (e) => {
    if (e.target.value === "") {
      props.setSearchResults([]);
    }
    const query = e.target.value.split(" ").join("+");
    debounceDropdown(query);
  };

  const handleClick = (i) => {
    props.setSearchResults([dropdown[i]]);
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      getSearch(input)
      setInput("")
      setDropdown([])
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="search-field"
          id="input"
          onInput={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          onChange={handleInput}
          placeholder="Search for a movie"
        />
        <img className="search-icon" src={search} alt="search-img" />
      </form>
      <div className="search-dropdown">
        <ul className="search-results">
          {input.length 
            ? dropdown.map((movie, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      handleClick(i);
                    }}
                  >
                    {" "}
                    {movie.title}
                  </li>
                );
              })
            : []}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;