import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tachyons";
import { robots } from "./robots";

import CardList from "./CardList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
);
