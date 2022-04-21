import React from "react";
import logo from "../images/logo.svg";
import { AppBar, Toolbar, Tabs, Tab, Button, Switch } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Nav = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: "#3ebfff" }}>
        <Toolbar>
          <img src={logo} alt="Logo" />

          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="#f0f"
            value={0}
            indicatorColor="#fff"
          >
            <Tab className="nav-link" label="About" />
            <Tab className="nav-link" label="Services" />
            <Tab className="nav-link" label="Projects" />
          </Tabs>

          <Button
            className="contact-btn"
            sx={{
              background: "#fff",
              color: "#000",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
            variant="contained"
            color="primary"
          >
            Contact
          </Button>

          <Switch />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Nav;
