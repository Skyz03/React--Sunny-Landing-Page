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
          <img src={logo} alt="Logo" />
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
              open={isDraweropen}
              anchor="right"
              onClose={() => setIsDraweropen(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "80%",
                  color: "#fff",
                  background:
                    "linear-gradient(350deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 23%, rgba(0,212,255,1) 100%)",
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
