mkdir -p .secrets
openssl rand -base64 32 > .secrets/xtrabackup_password
openssl rand -base64 32 > .secrets/mysql_password
openssl rand -base64 32 > .secrets/mysql_root_password
docker stack deploy -c confDb.yml galeraDb 
docker service ls
sleep 1
docker service scale galeraDb_node=2
docker service scale galeraDb_seed=0
docker service scale galeraDb_node=3
