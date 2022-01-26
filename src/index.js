import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Grid from "./components/Grid";

ReactDOM.render(
  <React.StrictMode>
    <Grid />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
