import "./Hero.css";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Disponible para proyectos
          </span>
          <p className="hero__eyebrow">Desarrollador de software</p>
          <h1 className="hero__title">Braihan Lopera</h1>
          <p className="hero__text">
            Colaboro en equipo para optimizar flujos de trabajo y procesos,
            garantizando que los procesos sean confiables, optimizados y bien
            estructurados.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              Ver proyectos
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Contactar
            </a>
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__media-glow" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Retrato de Braihan Lopera"
            className="hero__image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
