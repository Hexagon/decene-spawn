#/bin/bash
docker stop decene
docker rm decene
npm install
docker build . --tag="hexagon/decene"
docker run -d --restart=always -p 47474:47474 --name decene hexagon/decene
