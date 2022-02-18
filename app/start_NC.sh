

docker stack deploy -c confNC.yml gnextcloud

docker service ls

docker service scale gnextcloud_nextcloud=1
