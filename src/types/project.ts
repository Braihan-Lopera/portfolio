/** Un bloque de contenido dentro del detalle de un proyecto. */
export interface ProjectSection {
  heading: string;
  text: string;
}

/** Una imagen de la galería del detalle, con su texto alternativo. */
export interface ProjectImage {
  src: string;
  alt: string;
}

/** Contenido extendido, solo presente en proyectos con vista de detalle. */
export interface ProjectDetail {
  intro: string;
  sections: ProjectSection[];
  gallery: ProjectImage[];
}

/** Contrato de un proyecto mostrado en el portafolio. */
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  /** Ruta de la imagen de portada (opcional). Si falta, se muestra un monograma. */
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  /** Si existe, la tarjeta enlaza a una vista de detalle con este contenido. */
  detail?: ProjectDetail;
}
