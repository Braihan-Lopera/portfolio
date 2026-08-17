# syntax=docker/dockerfile:1

# ---------- Etapa 1: build ----------
# Se compila con Node; esta etapa NO llega a la imagen final.
FROM node:22-alpine AS build
WORKDIR /app

# pnpm vía corepack (viene con Node)
RUN corepack enable

# Instalar dependencias en una capa cacheable: solo se reinstala
# si cambian package.json o el lockfile.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar el código y compilar a estáticos en /app/dist
COPY . .
RUN pnpm build

# ---------- Etapa 2: runtime ----------
# nginx "unprivileged": corre como usuario no-root y escucha en 8080.
# Menos privilegios = menos daño posible si algo se compromete.
FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime

# Config endurecida (reemplaza la que trae la imagen)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Solo el resultado del build entra a la imagen final: ni código
# fuente, ni node_modules, ni herramientas de build.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

# Verifica que nginx responde; útil para orquestadores.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1
