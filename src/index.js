import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PropProvider from "./context/PropContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PropProvider>
        <App />
      </PropProvider>
    </BrowserRouter>
  </React.StrictMode>
);
