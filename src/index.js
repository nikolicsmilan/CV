import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from "./context/GeneralContext";

ReactDOM.render(
  <React.StrictMode>
    <GeneralContextProvider>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
    </GeneralContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// <DataContextProvider>  </DataContextProvider>
