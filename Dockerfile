# Build stage
FROM node:22-slim AS builder

WORKDIR /app

ARG VITE_API_URL
ARG VITE_BASE_URL_MEDIAS
ARG CAPROVER_GIT_COMMIT_SHA

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BASE_URL_MEDIAS=$VITE_BASE_URL_MEDIAS
ENV CAPROVER_GIT_COMMIT_SHA=$CAPROVER_GIT_COMMIT_SHA

RUN corepack enable && corepack prepare pnpm@8.4 --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm run build

FROM socialengine/nginx-spa:latest

# Copy built files to nginx
COPY --from=builder /app/dist /app/
COPY --from=builder /app/public /app/public

EXPOSE 80
