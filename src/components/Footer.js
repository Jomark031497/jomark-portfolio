import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({

});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<FacebookIcon />}
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<EmailIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
