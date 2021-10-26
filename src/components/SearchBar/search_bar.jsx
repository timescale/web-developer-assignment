import React from 'react';
import './searchbar.css';
import search from '../../images/search.png'

const SearchBar = () => {
    return (
        <form className="form">
            <input type="text" placeholder={`${search} Search for a movie`}/>
            <input type="submit" />
            {/* <img  src={search} alt="search-icon" /> */}
        </form>
    )
};

export default SearchBar;

