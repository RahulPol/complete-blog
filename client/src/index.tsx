import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/parts/Hello";

ReactDOM.render(
  <div>
    <Hello name="World" />
  </div>,
  document.getElementById("example")
);