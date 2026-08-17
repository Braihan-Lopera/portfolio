import { useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import "./ProjectDetail.css";
import { projects } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Lightbox from "../components/Lightbox";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const ref = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Proyecto inexistente o sin contenido de detalle: no hay nada que mostrar.
  if (!project || !project.detail) {
    return <Navigate to="/" replace />;
  }

  const { title, year, tags, detail } = project;

  return (
    <article className="project-detail section reveal" ref={ref}>
      <div className="container">
        <Link to="/#projects" className="project-detail__back">
          ← Volver a proyectos
        </Link>

        <header className="project-detail__header">
          <p className="project-detail__year">{year}</p>
          <h1 className="project-detail__title">{title}</h1>
          <ul className="project-detail__tags">
            {tags.map((tag) => (
              <li key={tag} className="project-detail__tag">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <p className="project-detail__intro">{detail.intro}</p>

        {detail.sections.map((sectionItem) => (
          <section key={sectionItem.heading} className="project-detail__block">
            <h2 className="project-detail__block-heading">
              {sectionItem.heading}
            </h2>
            <p className="project-detail__block-text">{sectionItem.text}</p>
          </section>
        ))}

        {detail.gallery.length > 0 && (
          <div className="project-detail__gallery">
            {detail.gallery.map((img, index) => (
              <button
                key={img.src}
                type="button"
                className="project-detail__figure"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar imagen: ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Lightbox
          key={detail.gallery[openIndex].src}
          image={detail.gallery[openIndex]}
          onClose={() => setOpenIndex(null)}
          onPrev={
            openIndex > 0 ? () => setOpenIndex(openIndex - 1) : undefined
          }
          onNext={
            openIndex < detail.gallery.length - 1
              ? () => setOpenIndex(openIndex + 1)
              : undefined
          }
        />
      )}
    </article>
  );
}
