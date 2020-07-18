import React from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Home from "./components/index";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />

      <Navbar />
      <Switch>
        <Route exact path="/jomark-portfolio/" component={Home} />
        <Route exact path="/jomark-portfolio/skills" component={Skills} />
        <Route exact path="/jomark-portfolio/portfolio" component={Portfolio} />
        <Route exact path="/jomark-portfolio/contacts" component={Contacts} />
      </Switch>
    </>
  );
}

export default App;
