import "./Projects.css";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" className="projects section reveal" ref={ref}>
      <div className="container">
        <SectionHeader index="03" title="Proyectos" />
        <p className="projects__note">
          Aprovecho herramientas de IA como Claude para agilizar el desarrollo y
          entregar más rápido, manteniendo el criterio técnico sobre cada
          decisión.
        </p>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
