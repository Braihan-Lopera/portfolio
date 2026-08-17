import "./Footer.css";
import { socials } from "../data/socials";

const NAV_LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#top" className="footer__name">
            Braihan Lopera
          </a>
          <p className="footer__tagline">Desarrollador de software</p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <ul className="footer__socials">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Braihan Lopera</span>
        <span className="footer__note">Construido con React &amp; TypeScript</span>
      </div>
    </footer>
  );
}
