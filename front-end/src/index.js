import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import TestReducer from "./TestReducer.js";

import "./style/reset.css";
import "./style/fonts.css";
import "./style/variables.css";
import "./style/defaults.css";
import "./style/helpers.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />  {/* 🔥 این خط اصلاح شد */}
    </BrowserRouter>
  </React.StrictMode>
);
