import React, { useState } from "react";

//Material-ui stuffs
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import AppsIcon from "@material-ui/icons/Apps";
import ContactsIcon from "@material-ui/icons/Contacts";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

//end of material-ui stuffs

import { HashLink as HLink } from "react-router-hash-link";

//Local files/images
import avatar from "../portfolio-project-files/alex.jpg";
//end of local files

const useStyles = makeStyles((theme) => ({
  root: {
    letterSpacing: "0.1rem",
    minHeight: "10vh",
  },
  appBar: {
    background: "#222",
    margin: "0 auto",
  },
  titleBar: {
    flex: "1",
    color: theme.palette.primary.main,
    marginLeft: "1rem",
  },
  listContainer: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%",
  },
  links: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    margin: "0 5px",

    "&:hover": {
      color: "tomato",
      borderBottom: "1px solid tomato",
      opacity: "0.7",
    },
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
    color: theme.palette.secondary.main,
  },
  offset: theme.mixins.toolbar,

  bottomNav: {
    top: "auto",
    bottom: "0",
    background: "rgba(34,34,34,0.8)",
 
   
    bottomNavIcons: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
}));

const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/jomark-portfolio/#section1",
  },
  {
    listIcon: <CodeIcon />,
    listText: "Skills",
    listPath: "/jomark-portfolio/#section2",
  },
  {
    listIcon: <AppsIcon />,
    listText: "Portfolio",
    listPath: "/jomark-portfolio/#section3",
  },
  {
    listIcon: <ContactsIcon />,
    listText: "Contacts",
    listPath: "/jomark-portfolio/#section4",
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
        <ArrowBackIcon style={{ color: "tomato" }} />
      </IconButton>

      <Avatar src={avatar} alt="Jomark Pangan" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key} component={HLink} to={item.listPath}>
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
      <Box component="nav" className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            
            <Box component="div" className={classes.titleBar}>
              <Typography variant="h4">Jomarks' Portfolio</Typography>
            </Box>
            <Hidden xsDown>
              <Box component="ul" className={classes.listContainer}>
                <HLink
                  to="/jomark-portfolio/#section1"
                  className={classes.links}
                >
                  <li>Home</li>
                </HLink>
                <HLink
                  to="/jomark-portfolio/#section2"
                  className={classes.links}
                >
                  <li>Skills</li>
                </HLink>
                <HLink
                  to="/jomark-portfolio/#section3"
                  className={classes.links}
                >
                  <li>Projects</li>
                </HLink>
                <HLink
                  to="/jomark-portfolio/#section4"
                  className={classes.links}
                >
                  <li>Contacts</li>
                </HLink>
              </Box>
            </Hidden>
            <MobileRightMenuSlider
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </Box>

      <Hidden smUp>
        <AppBar
          position="fixed"
          className={classes.bottomNav}
          justifyContent="space-around"
          alignItems="center"
        >
          <Toolbar>
            <IconButton
              onClick={toggleSlider("right", true)}
              style={{marginRight: "1rem"}}
            >
              <MenuIcon style={{ color: "tomato" }} />
            </IconButton>
            <IconButton style={{ flex: "1" }}>
              <HomeIcon style={{ color: "tomato" }} />
            </IconButton>

            <IconButton style={{ flex: "1" }}>
              <CodeIcon style={{ color: "tomato" }} />
            </IconButton>
            <IconButton style={{ flex: "1" }}>
              <AppsIcon style={{ color: "tomato" }} />
            </IconButton>
            <IconButton style={{ flex: "1" }}>
              <ContactsIcon style={{ color: "tomato" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
};

export default Navbar;
