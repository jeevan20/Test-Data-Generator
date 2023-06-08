// import React, { useState } from "react";
import React from "react";
import logo from "../Pages/images/logo.png";
import { BiHomeAlt2 } from "react-icons/bi";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <nav className="nav-panel" id="nav-bar">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <a href="/" className="panel-icon">
        <BiHomeAlt2 size={25} color="#4942e4" />
      </a>

      <ul className="panel-menu">
        <li>
          <a href="/" className="panel-home">
            Home
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
