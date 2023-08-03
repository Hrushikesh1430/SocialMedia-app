import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import { DataContextProvider } from "./Context/DataContext";

// Call make Server
makeServer();

const container = document.getElementById("root");

const Main = () => (
  <Router>
    <React.StrictMode>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </React.StrictMode>
  </Router>
);

const root = createRoot(container);
root.render(<Main />);
