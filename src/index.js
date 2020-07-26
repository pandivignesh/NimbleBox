import React from "react";
import ReactDOM from "react-dom";
import NimbleBoxRoutes from "./routes";
import * as serviceWorker from "./serviceWorker";

//Import CSS
import "./assets/css/vendor/bootstrap.min.css";
//Import Font CSS
import "./assets/css/font/font-awesome.css";
//Import Style CSS
import "./assets/scss/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <NimbleBoxRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
