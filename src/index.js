import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAnalytics } from "./firebase/analytics.util";
import Global from "./components/Global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAnalytics />
      <Global>
        <App />
      </Global>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
