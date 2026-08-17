import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Marca que JS está activo: habilita la ocultación previa a la animación.
// Sin esta clase, el contenido con `.reveal` permanece visible siempre.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
