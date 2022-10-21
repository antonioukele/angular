FROM node:latest as angular
RUN apt-get -y update
RUN apt-get -y install git
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build


FROM nginx:latest
VOLUME /var/cache/nginx
COPY --from=angular app/dist/app-final-angular /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf