# Despliegue

Sitio estático (React + Vite) servido por nginx dentro de Docker.

## Construir y levantar

```bash
docker compose up -d --build
```

El contenedor queda escuchando en `http://<host>:8080`.

## Actualizar tras cambios

```bash
docker compose up -d --build
```

## Ver logs

```bash
docker compose logs -f portfolio
```

## Detener

```bash
docker compose down
```

## Notas de seguridad

- La imagen final **solo contiene los estáticos** (`dist/`): sin código fuente,
  sin `node_modules`, sin herramientas de build.
- nginx corre como **usuario no-root** (imagen `nginx-unprivileged`, puerto 8080).
- El contenedor arranca con: `no-new-privileges`, todas las *capabilities*
  descartadas, y sistema de archivos de **solo lectura**.
- Cabeceras de seguridad y una **CSP** ajustada al sitio están en `nginx.conf`.
- Nada de secretos en el frontend: es un sitio 100% estático.

## Conexión con el acceso externo

Este contenedor solo expone el sitio en la red local (`:8080`). El acceso
público (dominio `blopera.xyz`) se maneja por separado con el túnel de
Cloudflare apuntando a `http://localhost:8080` — no es necesario abrir el
puerto en el router.

> Tras el primer despliegue, revisar la consola del navegador (F12) por si la
> **CSP** bloquea algo. Si algún recurso legítimo falla, ajustar la directiva
> correspondiente en `nginx.conf`.
