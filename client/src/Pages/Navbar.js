// import React, { useState } from "react";
import React from "react";
import logo from "./images/logo.png";
function Navbar() {
  // const [nav, setNav] = useState(false);

  // const changeBackground = () => {
  //   window.scrollY >= 50 ? setNav(true) : setNav(false);

  // };
  // window.addEventListener("scroll", changeBackground);

  return (
    // <nav className={nav ? "nav active" : "nav"}>
    <nav className="nav active">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="/" className="active-home">
            Home
          </a>
        </li>
        <li>
          <a href="#features">Features </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
