import type { Project } from "../types/project";

/**
 * Datos de los proyectos. Separados de la UI para agregar futuros
 * proyectos editando solo este archivo, sin tocar componentes.
 */
export const projects: Project[] = [
  {
    id: "servidor-casa",
    title: "Servidor casero autoalojado",
    description:
      "Servidor doméstico sobre Ubuntu Server con Docker: NAS de fotos (Immich), acceso externo por dominio propio y servicios autoalojados gestionados con Portainer.",
    tags: ["Linux", "Docker", "Self-hosting", "Networking"],
    year: 2026,
  },
  {
    id: "people-analytics",
    title: "Análisis de datos · People Analytics",
    description:
      "Construccion de diferentess tipos de aplicativos para diferentes areas o proyectos del area internos.",
    tags: ["SQL", "Python", "React", "Java"],
    year: 2026,
  },
  {
    id: "portfolio",
    title: "Portafolio personal",
    description:
      "Con ayuda de claude he creado esta interfaz construida con React, TypeScript y CSS por componente, con foco en un diseño limpio, accesible y mantenible.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    year: 2026,
  },
];
