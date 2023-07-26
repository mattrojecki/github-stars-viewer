
FROM node:18.17.0-bullseye-slim AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm ci

FROM node:18.17.0-bullseye-slim AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

RUN apt-get update
RUN apt-get upgrade
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb procps
RUN npm install -D @next/swc-linux-arm64-gnu
RUN npm run build
RUN npm run test:ci
RUN npm install cypress -g --force
RUN CI=true npm run cypress:ci

FROM node:18.17.0-bullseye-slim AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]