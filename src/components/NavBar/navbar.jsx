import React from 'react';
import logo from "../../images/logo.svg";
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="Timescale" />
    </div>
  );
};

export default NavBar;
