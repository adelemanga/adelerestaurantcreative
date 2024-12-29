# Dockerfile pour le backend
FROM node:lts-alpine

WORKDIR /app

# Installer curl (nécessaire pour le healthcheck)
RUN apk --no-cache add curl

# Copier les dépendances et installer
COPY package.json package.json
RUN npm install

# Copier le reste des fichiers nécessaires
COPY tsconfig.json tsconfig.json
COPY src src

# Démarrer l'application
CMD ["npm", "start"]
