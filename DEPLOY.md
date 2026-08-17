# Despliegue

Sitio estático (React + Vite) servido por nginx dentro de Docker, expuesto al
exterior mediante Cloudflare Tunnel. **No se publica ningún puerto en el host**:
el contenedor solo es accesible por la red Docker interna `edge`, a la que
también se conecta `cloudflared`. El único camino de entrada es el túnel.

## Requisito: red compartida

Una sola vez, crear la red que comparten portafolio y cloudflared:

```bash
docker network create edge
```

El contenedor de `cloudflared` también debe estar en esa red (`networks: [edge]`
en su compose).

## Construir y levantar

```bash
docker compose up -d --build
```

El contenedor `portfolio` queda escuchando en `http://portfolio:8080` **dentro
de la red `edge`** (no en el host).

## Conectar el dominio (Cloudflare)

En el panel de Cloudflare Zero Trust → Networks → Tunnels → (tu túnel) →
Public Hostname → *Add a public hostname*:

- **Domain:** `blopera.xyz`
- **Service → Type:** `HTTP`
- **URL:** `http://portfolio:8080`

Cloudflare crea el DNS y el HTTPS automáticamente.

## Actualizar tras cambios

```bash
git pull && docker compose up -d --build
```

## Ver logs

```bash
docker compose logs -f portfolio
```

## Notas de seguridad

- La imagen final **solo contiene los estáticos** (`dist/`): sin código fuente,
  sin `node_modules`, sin herramientas de build.
- nginx corre como **usuario no-root** (imagen `nginx-unprivileged`, puerto 8080).
- El contenedor arranca con `no-new-privileges`, todas las *capabilities*
  descartadas y sistema de archivos de **solo lectura**.
- **Sin puertos publicados en el host:** no es accesible desde la LAN, solo por
  el túnel.
- Cabeceras de seguridad y una **CSP** ajustada al sitio están en `nginx.conf`.
- Nada de secretos en el frontend: es un sitio 100% estático.

> Tras el primer despliegue, revisar la consola del navegador (F12) por si la
> **CSP** bloquea algo. Si algún recurso legítimo falla, ajustar la directiva
> correspondiente en `nginx.conf`.
