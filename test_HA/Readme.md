# Test HA 

### Boucle envoi de requetes ( every 0.01 secondes ) 

run : 
python3 requete_nextcloud.py 

### test remove node 


Pour chaque noeux : 

    (Si on supprime un noeux manager, on peut aussi supprimer un noeux worker en plus  )

    run docker node rm ensg-0i
    [verifications]
    docker swarm join --token 
    


[verifications] : 

- Vérifier alerting Grafana pour traefik et telegraf 
