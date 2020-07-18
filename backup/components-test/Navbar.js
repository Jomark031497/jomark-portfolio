import React from "react";

//Material-ui stuffs
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";
import AppsIcon from "@material-ui/icons/Apps";
import ContactsIcon from "@material-ui/icons/Contacts";
//end of material-ui stuffs

//react-router stuffs
import { Link } from "react-router-dom";
//end of react-router stuffs

//JSS styling
const useStyles = makeStyles((theme) => ({
  root: {
    letterSpacing: "0.2rem",
  },
  titleBar: {
    flex: "1",
    color: theme.palette.primary.main,
    marginLeft: "2rem",
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
  appBar: {
    background: "#222",
    minHeight: "10vh",
  },
}));
//end of JSS styling

//MENU JSON
const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/jomark-portfolio/",
  },
  {
    listIcon: <CodeIcon />,
    listText: "Skills",
    listPath: "/jomark-portfolio/skills",
  },
  {
    listIcon: <AppsIcon />,
    listText: "Portfolio",
    listPath: "/jomark-portfolio/portfolio",
  },
  {
    listIcon: <ContactsIcon />,
    listText: "Contacts",
    listPath: "/jomark-portfolio/contacts",
  },
];

//---------------Main NavBar Component--------------------------
const Navbar = () => {
  const classes = useStyles();

  return (
    <Box component="nav" className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Hidden smUp>
            <IconButton>
              <MenuIcon style={{ display: "block", fill: "tomato" }} />
            </IconButton>
          </Hidden>
          <Box component="div" className={classes.titleBar}>
            <Typography variant="h4">Jomarks' Portfolio</Typography>
          </Box>

          <Hidden xsDown>
            <Box component="ul" className={classes.listContainer}>
              <Link to="/jomark-portfolio/" className={classes.links}>
                <li>Home</li>
              </Link>
              <Link to="/jomark-portfolio/skills" className={classes.links}>
                <li>Skills</li>
              </Link>
              <Link to="/jomark-portfolio/projects" className={classes.links}>
                <li>Projects</li>
              </Link>
              <Link to="/jomark-portfolio/contacts" className={classes.links}>
                <li>Contacts</li>
              </Link>
            </Box>
          </Hidden>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
