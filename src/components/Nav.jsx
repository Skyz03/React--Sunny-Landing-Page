import React from "react";
import logo from "../images/logo.svg";
import { AppBar, Typography } from "@mui/material";

const Nav = () => {
  return (
    <AppBar position="sticky">
      <Typography>
        <img src={logo} alt="Logo" />
      </Typography>
    </AppBar>
  );
};

export default Nav;
