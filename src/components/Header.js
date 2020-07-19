import React from "react";
import { Avatar, Box, Typography, Grid } from "@material-ui/core";
import avatar from "../portfolio-project-files/alex.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "darkslategray",
    flexGrow: 1,
  },
  gridContainer: {
    justifyContent: "center",
  },
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

  footer: {
    alignItems: "center",
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={4}
        >
          <Grid item style={{ margin: "4rem" }}></Grid>
          <Grid item>
            <Avatar src={avatar} alt="Jomark" className={classes.avatar} />
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              <Typed strings={["Jomark Pangan"]} typeSpeed={40} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" className={classes.subTitle}>
              <Typed
                strings={["Web Developer", "Computer Engineer"]}
                typeSpeed={40}
                backSpeed={40}
                loop
              />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
