FROM node:lts-alpine as build
WORKDIR /app
COPY package.json yarn.lock tsconfig.json ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

FROM node:lts-alpine as runner
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production && yarn cache clean
COPY config/ /app/config/
COPY web/ /app/web/
RUN adduser -D koa && chown -R koa /app
USER koa
CMD ["yarn", "start"]
