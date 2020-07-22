import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./shared/styles/index.css";
import StoriesRoutes from "./Stories";
ReactDOM.render(
  <BrowserRouter>
    <StoriesRoutes />
  </BrowserRouter>,
  document.getElementById("root")
);
