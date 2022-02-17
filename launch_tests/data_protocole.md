
## Data test protocole

#### MariaDB

To test:

- go to a node that contains a mariadb container
- suppress the mariadb container:
```
docker container rm ID_CONTAINER_MARIADB --force
```

- check if the container has redeployed to another node:
    - go to each node
    - et launch:
    ```
    docker ps
    ```
- check the availability of mariadb by going to the following address:
```
https://nextcloud.ensg.duckdns.org
```
- authenticate


#### InfluxDB

To test:

- go to a node that contains a influxdb container
- suppress the influxdb container:
```
docker container rm ID_CONTAINER_INFLUXDB --force
```

- check if the container has redeployed to another node:
    - go to each node
    - and launch:
    ```
    docker ps
    ```
- check the availability of influxdb by going to the following address:
```
https://grafana.ensg.duckdns.org
```
- authenticate
- go to the 'Telegraf Metrics Final' dashboard
- check the availability of data