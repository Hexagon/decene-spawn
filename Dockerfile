FROM node:lts-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install --no-cache
EXPOSE 47474
RUN chmod +x /usr/src/app/docker-entrypoint.sh
ENTRYPOINT ["/bin/sh", "/usr/src/app/docker-entrypoint.sh"]
