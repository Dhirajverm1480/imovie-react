import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from "./Contexts/MoviesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </BrowserRouter>
  </StrictMode>
);
