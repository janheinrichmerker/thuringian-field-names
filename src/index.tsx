import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/App";
import { reportWebVitals } from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// To measure performance, pass a function to send to an analytics endpoint: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
