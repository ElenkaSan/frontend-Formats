import React from "react";
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const container = document.getElementById("root");
// const root = createRoot(container);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorker.unregister();
