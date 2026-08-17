import type { Project } from "../types/project";
import homeServerImg from "../assets/home-server.png";
import listContainersImg from "../assets/list-containers.png";

/**
 * Datos de los proyectos. Separados de la UI para agregar futuros
 * proyectos editando solo este archivo, sin tocar componentes.
 *
 * `detail` es opcional: solo los proyectos que lo tienen enlazan a una
 * vista de caso de estudio. Los demás se quedan como tarjeta simple.
 */
export const projects: Project[] = [
  {
    id: "servidor-casa",
    title: "Servidor casero autoalojado",
    description:
      "Servidor doméstico sobre Ubuntu Server con Docker: NAS de fotos (Immich), acceso externo por dominio propio y servicios autoalojados gestionados con Portainer.",
    tags: ["Linux", "Docker", "Self-hosting", "Networking"],
    year: 2026,
    image: homeServerImg,
    detail: {
      intro:
        "Una laptop vieja convertida en servidor 24/7: NAS de fotos familiares, panel de administración, y varios servicios autoalojados, todo accesible desde fuera de casa sin exponer la red a internet.",
      sections: [
        {
          heading: "El problema",
          text: "Quería dejar de depender de servicios en la nube de terceros para las fotos familiares y para probar herramientas propias, sin pagar hosting ni exponer mi red doméstica innecesariamente.",
        },
        {
          heading: "Cómo está armado",
          text: "Ubuntu Server 24.04 LTS sobre una laptop reciclada, con Docker orquestando cada servicio en su propio contenedor: Immich (fotos), Portainer (panel de administración), y otros. UFW como firewall, Fail2ban contra fuerza bruta, y SSH endurecido en un puerto no estándar.",
        },
        {
          heading: "Acceso externo, sin abrir el router",
          text: "Sin acceso a las credenciales del router del ISP, la salida fue Cloudflare Tunnel: el servidor abre una conexión saliente hacia Cloudflare, que expone el dominio propio con HTTPS automático — sin necesidad de reenviar ningún puerto ni exponer la IP pública real.",
        },
        {
          heading: "Seguridad como proceso, no como paso único",
          text: "Durante una auditoría de rutina encontré dos servicios administrativos alcanzables desde internet por un reenvío de puertos que no había pedido explícitamente. Se verificó externamente y se restringieron a la red local — la infraestructura se revisa, no se da por segura una sola vez.",
        },
      ],
      gallery: [
        {
          src: homeServerImg,
          alt: "Sesión SSH activa contra el servidor, mostrando el banner de bienvenida con estado del sistema en vivo",
        },
        {
          src: listContainersImg,
          alt: "Lista de contenedores Docker corriendo en el servidor con su estado",
        },
      ],
    },
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
