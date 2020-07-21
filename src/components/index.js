import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";

import { makeStyles } from "@material-ui/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divider: {
    border: "0.5rem solid #222",
    margin: "2rem auto",
    borderRadius: "20px",
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div id="section1">
        <Header />
      </div>

      <Divider variant="middle" className={classes.divider} />

      <div id="section2">
        <Skills />
      </div>
      <Divider variant="middle" className={classes.divider} />
      <div id="section3">
        <Portfolio />
      </div>

      <Divider variant="middle" className={classes.divider} />
      <div id="section4">
        <Contacts />
       </div>
    </>
  );
};

export default Home;
