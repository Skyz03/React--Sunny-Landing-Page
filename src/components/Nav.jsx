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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

const Nav = () => {
  const menuItems = [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "About",
      icon: "info",
      link: "/about",
    },
  ];

  const theme = useTheme();

  const [isDraweropen, setIsDraweropen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <AppBar elevation={0} position="sticky" sx={{ background: "#3ebfff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={logo} alt="Logo" />

          <IconButton
            size="large"
            color="inherit"
            edge="end"
            onClick={() => setIsDraweropen(true)}
          >
            <MenuIcon />
          </IconButton>

          {matches ? (
            <Drawer
              open={isDraweropen}
              anchor="right"
              onClose={() => setIsDraweropen(false)}
            >
              <div>
                <Typography variant="h6">Menu</Typography>
              </div>

              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={item.text} button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
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
