import React from "react";
import logo from "../images/logo.svg";
import { AppBar, Typography } from "@mui/material";

const Nav = () => {
  return (
    <>
      <React.Fragment>
        <AppBar position="sticky" color="hsl(167, 40%, 24%)">
          <Typography>
            <img src={logo} alt="Logo" />
          </Typography>
        </AppBar>
      </React.Fragment>
      {/* <nav className="nav">
        <div className="logo">
          <a href="/" className="logo-link"></a>
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
      </nav> */}
    </>
  );
};

export default Nav;
