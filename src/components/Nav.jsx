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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const Nav = () => {
  const menuItems = [
    {
      text: "About",
      icon: "👨‍💼",
      link: "/about",
    },
    {
      text: "Services",
      icon: "🛠",
      link: "/services",
    },
    {
      text: "Projects",
      icon: "📽",
      link: "/projects",
    },
    {
      text: "Contact",
      icon: "📞",
      link: "/contact",
    },
  ];

  const theme = useTheme();

  const [isDraweropen, setIsDraweropen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const matches = useMediaQuery(theme.breakpoints.down("sm")) ? true : false;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <AppBar elevation={0} position="sticky" sx={{ background: "#3ebfff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" />{" "}
          </Link>
          {matches ? (
            <IconButton
              size="large"
              color="inherit"
              edge="end"
              onClick={() => setIsDraweropen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : null}

          {matches ? (
            <Drawer
              className="drawer-list"
              open={isDraweropen}
              anchor="right"
              onClose={() => setIsDraweropen(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "80%",
                  color: "#fff",
                  background: "#3ebfff",
                },
                "& .MuiListItemText-primary": {
                  fontSize: "1.2rem",
                  letterSpacing: "0.1rem",
                  fontFamily: "Fraunces",
                },
                "& .MuiButtonBase-root": {
                  borderBottom: "1px solid #fff",
                },
              }}
            >
              <List className="dra-list">
                <img src={logo} alt="Logo" />{" "}
                {menuItems.map((item, index) => (
                  <ListItem key={item.text} button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <Link to={item.link}>
                      {" "}
                      <ListItemText primary={item.text} />
                    </Link>
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
                <Link to="/about">
                  {" "}
                  <Tab className="nav-link" label="About" />{" "}
                </Link>
                <Link to="/services">
                  {" "}
                  <Tab className="nav-link" label="Services" />
                </Link>
                <Link to="/projects">
                  {" "}
                  <Tab className="nav-link" label="Projects" />
                </Link>
              </Tabs>
              <Link to="/contact">
                {" "}
                <Button className="contact-btn" variant="contained">
                  Contact
                </Button>
              </Link>

              <Switch />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Nav;
