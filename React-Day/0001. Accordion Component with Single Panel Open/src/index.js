import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h2>Accordion Example</h2>
    <br/>
    <App />
  </React.StrictMode>,
  rootElement
);
