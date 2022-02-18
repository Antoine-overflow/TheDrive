mkdir -p .secrets
openssl rand -base64 32 > .secrets/xtrabackup_password
openssl rand -base64 32 > .secrets/mysql_password
openssl rand -base64 32 > .secrets/mysql_root_password
docker stack deploy -c config.yml gnext
docker service ls
sleep 1
docker service scale gnext_seed=1
docker service scale gnext_node=2
docker service scale gnext_seed=0
docker service scale gnext_node=3
docker service scale gnext_nextcloud=3
docker service scale gnext_onlyoffice=1
