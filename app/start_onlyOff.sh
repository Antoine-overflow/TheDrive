docker stack deploy -c confOnlyOffice.yml oOffice
docker service ls 
sleep 1
docker service scale oOffice_onlyoffice=1
