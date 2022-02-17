
## Data test protocole

#### MariaDB

Pour tester :

- se rendre sur un noeud qui contient nextcloud
- supprimer le container nextcould:
```
docker container rm nextcloud --force
```

- vérifier si le container s'est redéployé sur un autre noeud:
    - se rendre sur chaque VM
    - et lancer:
    ```
    docker ps
    ```
- vérifier la disponibilité de mariadb en se rendant à l'adresse suivante:
```
https://nextcloud.ensg.duckdns.org
```
- s'authentifier


#### InfluxDB

Pour tester :

- se rendre sur le noeud qui contient influxdb
- supprimer le container influxdb:
```
docker container rm ID_CONTAINER_INFLUXDB --force
```

- vérifier si le container s'est redéployé sur un autre noeud:
    - se rendre sur chaque noeud
    - et lancer:
    ```
    docker ps
    ```
- vérifier la disponité de influxdb en se rendant à l'adresse suivante:
```
https://grafana.ensg.duckdns.org
```
- s'authentifier
- se rendre dans le dashboard 'Telegraf Metrics Final'
- vérifier la disponibilités des données sur les VM