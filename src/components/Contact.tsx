import "./Contact.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { socials, email } from "../data/socials";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="contact section reveal" ref={ref}>
      <div className="container">
        <div className="contact__card">
          <p className="contact__index">04 — Contacto</p>
          <h2 className="contact__title">¿Trabajamos juntos?</h2>
          <p className="contact__text">
            ¿Tienes un proyecto o una idea en mente? Escríbeme y lo conversamos.
          </p>

          <a href={`mailto:${email}`} className="contact__email">
            {email}
          </a>

          <ul className="contact__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="contact__social"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
