FROM node:alpine as build
WORKDIR /app
COPY package.json package.json
RUN yarn
COPY . .
RUN yarn build

FROM node:alpine as runner
WORKDIR /app
COPY --from=build /app /app
CMD ["yarn", "start"]
