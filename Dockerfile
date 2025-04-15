# === STAGE 1 : build ===
FROM node:23-slim AS build

WORKDIR /app

# Configuration de la variable d'environnement PORT
ENV PORT=3000

# Copie des fichiers de configuration
COPY package*.json ./
COPY tsconfig.json ./
COPY jest.config.js ./
COPY eslint.config.mjs ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY src/ ./src/
COPY public/ ./public/

# Build de l'application
RUN npm run build


# === STAGE 2 : production ===
FROM node:23-slim AS prod

WORKDIR /app

ENV PORT=3000

# Copie uniquement le package.json et dist, public
COPY package*.json ./
COPY --from=build /app/dist ./dist/
COPY --from=build /app/public ./public/

# Installation des dépendances de production uniquement
RUN npm install --omit=dev

# Exposition du port
EXPOSE ${PORT}

# Démarrage de l'application
CMD ["node", "dist/app.js"]