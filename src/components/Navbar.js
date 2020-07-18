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

//Local files/images
import avatar from "../portfolio-project-files/avatar.png";
//end of local files

//react-router stuffs
import { Link } from "react-router-dom";
//end of react-router stuffs

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
      <Box component="nav" className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Hidden smUp>
              <IconButton onClick={toggleSlider("right", true)}>
                <MenuIcon style={{ color: "tomato" }} />
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
                <Link
                  to="/jomark-portfolio/portfolio"
                  className={classes.links}
                >
                  <li>Projects</li>
                </Link>
                <Link to="/jomark-portfolio/contacts" className={classes.links}>
                  <li>Contacts</li>
                </Link>
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
      </Box>
    </>
  );
};

export default Navbar;
