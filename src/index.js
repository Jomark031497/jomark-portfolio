import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core/";
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
    background: {
      default: "#294646",
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
