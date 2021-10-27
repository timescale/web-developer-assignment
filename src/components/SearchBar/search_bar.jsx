import React, { useState, useCallback } from "react";
import search from "../../images/search.png";
import getMovies from "../../utils/getMovies";
import debounce from "../../utils/debounceFunction";
import "./searchbar.css";

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
    debounce((nextValue) => getSearch(nextValue), 400),
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
    clearInputField();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch(input);
    clearInputField();
  };

  const clearInputField = () => {
    setInput("");
    setDropdown([]);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="search-field"
          onInput={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          onChange={handleInput}
          placeholder="Search for a movie"
        />
        <img className="search-icon" src={search} alt="search-img" />
      </form>
    </div>
  );
};

export default SearchBar;
