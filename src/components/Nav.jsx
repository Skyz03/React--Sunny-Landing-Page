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
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

const Nav = () => {
  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <AppBar elevation={0} position="sticky" sx={{ background: "#3ebfff" }}>
        <Toolbar>
          <img src={logo} alt="Logo" />

          {matches ? (
            <Drawer variant="permanent" anchor="right">
              <div>
                <Typography variant="h6">Menu</Typography>
              </div>
            </Drawer>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Nav;
