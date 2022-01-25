import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { Game } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
