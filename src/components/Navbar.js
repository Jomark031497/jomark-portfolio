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
import {
  ArrowBack,
  Home,
  AssignmentInd,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import avatar from "../portfolio-project-files/jomark.jpg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#222",
    color: "tan",
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
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
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
      <Avatar src={avatar} alt="Jomark Pangan" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem button key={key}>
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
      <Box component="nav">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>

            <Typography variant="h5">Portfolio</Typography>
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
