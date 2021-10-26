import React from 'react';
import './searchbar.css';
import search from '../../images/search.png'

const SearchBar = () => {
    return (
        <form className="form">
            <input className="search-field" type="search" placeholder="Search for a movie"/>
            {/* <button className="search-button" type="submit"> */}
                <img className="search-icon" src={search} alt="search-img" />
            {/* </button> */}
        </form>
    )
};

export default SearchBar;

