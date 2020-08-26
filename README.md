<!-- local -->

npm i

.env {
    APP_NAME
    API_ROOT
    DEV_EMAIL
    DEV_PASSWORD
}

.production.env {
    APP_NAME
    PUBLIC_URL
    API_ROOT
}

npm run build

docker build -t arziburst/tjstore-frontend .

docker push arziburst/tjstore-frontend

<!-- droplet -->

docker pull arziburst/tjstore-frontend

docker tag arziburst/tjstore-frontend dokku/frontend

dokku tags:deploy frontend