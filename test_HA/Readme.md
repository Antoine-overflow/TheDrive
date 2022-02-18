# Test HA 

### Boucle envoi de requetes + boucle envoi data

run : 
```bash
python3 requete_nextcloud.py 
./test.sh
```
### test remove node 


Pour chaque noeux : 

    (Si on supprime un noeux manager, on peut aussi supprimer un noeux worker en plus  )

    run docker node rm ensg-0i
    [verifications]
    docker swarm join --token 
    


[verifications] : 

- Verifier alerting Grafana pour traefik et telegraf 
- Verifier que tous les services sont actifs : docker service ls 
