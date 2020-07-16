import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { ArrowBack, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import CodeIcon from "@material-ui/icons/Code";
import { makeStyles } from "@material-ui/styles";
import avatar from "../portfolio-project-files/jomark.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#222",
  },

  menuSlider: {
    width: "250px",
    background: "#511",
    height: "100%",
  },

  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },

  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/jomark-portfolio/",
  },
  {
    listIcon: <CodeIcon />,
    listText: "Skills",
    listPath: "/jomark-portfolio/skills",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/jomark-portfolio/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/jomark-portfolio/contacts",
  },
];

const Navbar = () => {
  const [state, setstate] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSlider}
      onClick={toggleSlider(slider, false)}
    >
      <IconButton>
        <ArrowBack style={{ color: "tomato" }} />
      </IconButton>

      <Avatar src={avatar} alt="Jomark Pangan" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={Link} to={item.listPath}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={item.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav" className={classes.boxContainer}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuIcon style={{ color: "tomato" }} />
            </IconButton>

            <Typography variant="h5" color="secondary">Portfolio</Typography>
            <MobileRightMenuSlider
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
