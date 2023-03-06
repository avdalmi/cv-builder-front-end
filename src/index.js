import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/styled-engine-sc";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <StyledEngineProvider injectFirst> */}
    <Router>
      <App />
    </Router>
    {/* </StyledEngineProvider> */}
  </React.StrictMode>
);
