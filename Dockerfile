FROM node:latest as builder
WORKDIR '/youcook'
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx ng build youCook

FROM nginx:latest
EXPOSE 80
COPY --from=builder /youcook/dist/you-cook /usr/share/nginx/html