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
}
