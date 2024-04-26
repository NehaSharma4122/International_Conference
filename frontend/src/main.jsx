import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DayContext, DayContextProvider } from "./Context/DayContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DayContextProvider>
      <App />
      </DayContextProvider>
  </React.StrictMode>
);
