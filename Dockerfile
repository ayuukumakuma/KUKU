FROM node:16-alpine

RUN apk update && \
    apk add git && \
    npm uninstall yarn -g \
    npm install yarn -g \
    yarn upgrade \
    yarn -g add create-nuxt-app

ENV HOST 0.0.0.0
EXPOSE 3000