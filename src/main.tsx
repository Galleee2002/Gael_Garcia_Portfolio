import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.css";
import { themeColors } from "./utils/colors";

// Inyectar colores del tema en el body desde TypeScript
document.body.style.backgroundColor = themeColors.background;
document.body.style.color = themeColors.text;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
