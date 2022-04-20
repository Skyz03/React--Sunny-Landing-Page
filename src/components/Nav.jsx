import React from "react";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      <div>
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
