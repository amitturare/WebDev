import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.js";

createRoot(document.getElementById("root")).render(<App />);
createRoot(document.querySelector("#root")).render(<App />);
