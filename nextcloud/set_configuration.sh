#!/bin/bash

set -x

sudo docker exec -u www-data app-server php occ --no-warnings config:system:get trusted_domains >> trusted_domain.tmp

if ! grep -q "app" trusted_domain.tmp; then
    TRUSTED_INDEX=$(cat trusted_domain.tmp | wc -l);
    sudo docker exec -u www-data app-server php occ --no-warnings config:system:set trusted_domains $TRUSTED_INDEX --value="app"
fi

rm trusted_domain.tmp

sudo docker exec -u www-data app-server php occ --no-warnings app:install onlyoffice

sudo docker exec -u www-data app-server php occ --no-warnings config:system:set onlyoffice DocumentServerUrl --value="http://localhost:82/"
sudo docker exec -u www-data app-server php occ --no-warnings config:system:set onlyoffice DocumentServerInternalUrl --value="http://onlyoffice-document-server/"
sudo docker exec -u www-data app-server php occ --no-warnings config:system:set onlyoffice StorageUrl --value="http://app/"

sudo docker exec -u www-data app-server php occ --no-warnings config:system:set allow_local_remote_servers  --value=true
