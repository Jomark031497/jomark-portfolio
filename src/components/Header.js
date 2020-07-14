import React from "react";
import { Avatar, Box, Typography, Grid } from "@material-ui/core";
import avatar from "../portfolio-project-files/jomark.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subTitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.typedContainer}>
        <Grid container justify="center">
        <Avatar src={avatar} alt="Jomark" className={classes.avatar} />
        </Grid>
        
        <Typography variant="h4" className={classes.title}>
          <Typed strings={["Jomark Pangan"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography variant="h5" className={classes.subTitle}>
          <Typed
            strings={["Aspiring Web Developer", "MERN Stack"]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};

export default Header;
