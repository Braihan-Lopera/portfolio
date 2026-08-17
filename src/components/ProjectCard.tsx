import "./ProjectCard.css";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

/** Toma las iniciales de las dos primeras palabras del título. */
function getMonogram(title: string): string {
  return title
    .split(" ")
    .filter((word) => /[a-zA-ZÀ-ÿ]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, year, image, repoUrl, liveUrl } = project;
  const hasLinks = Boolean(repoUrl || liveUrl);

  return (
    <article className="card">
      <div className="card__cover">
        {image ? (
          <img src={image} alt={title} className="card__cover-img" loading="lazy" />
        ) : (
          <span className="card__monogram" aria-hidden="true">
            {getMonogram(title)}
          </span>
        )}
      </div>

      <div className="card__body">
        <header className="card__header">
          <h3 className="card__title">{title}</h3>
          <span className="card__year">{year}</span>
        </header>

        <p className="card__description">{description}</p>

        <ul className="card__tags">
          {tags.map((tag) => (
            <li key={tag} className="card__tag">
              {tag}
            </li>
          ))}
        </ul>

        {hasLinks && (
          <footer className="card__links">
            {repoUrl && (
              <a href={repoUrl} className="card__link" target="_blank" rel="noreferrer">
                Código
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} className="card__link" target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
