import React from "react";
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
import { ThemeProvider, createMuiTheme } from "@mui/material/styles";

const Nav = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Paper>
          <AppBar position="sticky" sx={{ background: "#3ebfff" }}>
            <Toolbar>
              <img src={logo} alt="Logo" />

              <Tabs sx={{ marginLeft: "auto" }} textColor="#f0f" value={0}>
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
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Nav;
