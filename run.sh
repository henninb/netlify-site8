#!/bin/sh

netlify deploy --prod

docker-compose build
docker-compose up -d

exit 0
