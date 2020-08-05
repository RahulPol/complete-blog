import * as React from "react";
import * as ReactDOM from "react-dom";

// Global assets
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/styles/style.css";
import "./asset/styles/site-assets.min.css";
import "./asset/images/loader.gif";
import "./asset/js/gmap3.min.js";
import "./asset/js/script.js";

import Home from "./components/screens/Home";

ReactDOM.render(
  <div>
    <Home />
  </div>,
  document.getElementById("root")
);
