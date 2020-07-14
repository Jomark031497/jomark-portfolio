import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#007bff",
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {" "}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
