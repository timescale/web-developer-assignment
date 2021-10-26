import React from 'react';
import SearchBar from './SearchBar/search_bar';
import logo from "../images/logo.svg";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Timescale" />
      {/* <SearchBar/> */}
    </div>
  );
};

export default NavBar;
