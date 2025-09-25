import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

// Optional: respect OS dark mode on first load
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
