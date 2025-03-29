# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json /app/
RUN npm install -g pnpm
RUN pnpm install

COPY ./ /app/

ARG APP_URL=${APP_URL}

RUN pnpm run build

# Stage 1, "production-stage", based on Node.js, to run the application
FROM node:20 AS production-stage

WORKDIR /app

RUN npm install -g pnpm

COPY --from=build-stage /app/package*.json ./
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/next.config.mjs ./

EXPOSE 3000

CMD ["pnpm", "start"]