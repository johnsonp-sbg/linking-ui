ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION} as builder

WORKDIR /buildingsite

COPY . .

# This will need a clever way of being defined per envionment I think
ENV PUBLIC_URL=http://localhost:3000/

RUN npm install
RUN npm run build

ARG APACHE_VERSION=2.4-alpine
FROM httpd:2.4-alpine as app

COPY --from=builder /buildingsite/build/ /usr/local/apache2/htdocs/