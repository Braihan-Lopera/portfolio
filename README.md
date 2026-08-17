# Portafolio — Braihan Lopera

Sitio personal estilo CV para presentar perfil y proyectos. Interfaz limpia,
minimalista, responsive y accesible, servida como estáticos.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** (servidor de desarrollo y build)
- **CSS por componente** (un `.css` por cada componente, sin framework de estilos)
- **react-icons** para los logos de tecnologías
- **Docker + nginx** para el despliegue

## Requisitos

- Node.js 20+ (el build en Docker usa Node 22)
- pnpm (`corepack enable` lo habilita)

## Desarrollo

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo (http://localhost:5173)
pnpm build       # compilar a producción (genera dist/)
pnpm lint        # análisis estático con ESLint
```

## Estructura

```text
src/
├── components/      # cada componente .tsx con su .css propio
├── data/            # projects.ts, socials.ts (contenido separado de la UI)
├── hooks/           # useScrollReveal.ts (animación al hacer scroll)
├── styles/          # variables.css (tokens de diseño) + global.css (reset)
├── types/           # contratos TypeScript (project.ts)
├── App.tsx          # composición de las secciones
└── main.tsx         # punto de entrada
```

Para agregar un proyecto nuevo se edita solo `src/data/projects.ts`; la interfaz
se actualiza sola. Los enlaces de redes viven en `src/data/socials.ts`.

## Despliegue

Sitio estático dockerizado (nginx). Los pasos y las notas de seguridad están en
[DEPLOY.md](./DEPLOY.md). En resumen:

```bash
docker compose up -d --build
```

El contenedor escucha en `localhost:8080`; el acceso público se maneja por
Cloudflare Tunnel apuntando a ese puerto.
