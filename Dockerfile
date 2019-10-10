FROM node:10.16.3 as builder
ARG NPM_ENV=development

ENV PORT $PORT

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production
COPY src/ ./src/
COPY public/ ./public/
RUN npm run build

FROM nginx:1.15.5
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
EXPOSE $PORT