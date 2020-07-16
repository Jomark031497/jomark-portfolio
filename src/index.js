import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#ff6347",
    },
    secondary: {
      main: "#D2B48C",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
