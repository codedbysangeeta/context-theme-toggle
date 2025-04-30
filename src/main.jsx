import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById('root')).render(<ThemeProvider>
  <LanguageProvider> <App /></LanguageProvider>
 </ThemeProvider>);
