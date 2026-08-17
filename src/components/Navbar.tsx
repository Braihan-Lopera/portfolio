import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Cerrar el menú móvil con la tecla Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
          <span className="navbar__toggle-bar" aria-hidden="true" />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar__nav ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
