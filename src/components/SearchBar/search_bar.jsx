import React from 'react';
import './searchbar.css';
import search from '../../images/search.png'

const SearchBar = () => {
    return (
        <form className="form">
            <input className="search-field" type="text" placeholder="Search for a movie"/>
                <img className="search-icon" src={search} alt="search-img" />
        </form>
    )
};

export default SearchBar;

