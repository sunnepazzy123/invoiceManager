# Stage 1

FROM node:18.18.2-alpine3.18 As build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm ci --only=production && npm cache clean --force

USER node

# Stage 2

FROM node:18.18.2-alpine3.18 As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist


 CMD [ "node", "dist/main.js" ]