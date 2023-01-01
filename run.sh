#!/bin/sh

netlify deploy --prod

docker stop nginx-server
docker rm -f nginx-server
docker rmi nginx-server
docker-compose build
docker-compose up -d

exit 0
