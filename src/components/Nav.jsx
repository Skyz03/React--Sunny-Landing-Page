import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Switch,
  Paper,
} from "@mui/material";

import { Link as Scroll } from "react-scroll";

const Nav = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <AppBar elevation={0} position="sticky" sx={{ background: "#3ebfff" }}>
        <Toolbar>
          <img src={logo} alt="Logo" />

          <Tabs
            sx={{ marginLeft: "auto" }}
            onChange={handleChange}
            value={value}
          >
            <Tab className="nav-link" label="About" />
            <Tab className="nav-link" label="Services" />
            <Tab className="nav-link" label="Projects" />
          </Tabs>

          <Button className="contact-btn" variant="contained">
            Contact
          </Button>

          <Switch />
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Nav;
