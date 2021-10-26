import React from 'react';
import logo from "../../images/logo.svg";
import "./navbar.css"

const NavBar = (props) => {
  const handleClick = () => {
    props.setSearchResults([])
  }

  return (
    <div className="nav-bar">
      <img className="timescale-logo" src={logo} alt="Timescale" onClick={handleClick}/>
    </div>
  );
};

export default NavBar;
