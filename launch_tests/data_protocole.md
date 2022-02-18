## Data test protocole

#### MariaDB

1.  Replication Testing

Verify that all nodes in galara cluster have connected to each other. In a node of the docker cluster, enter in a galera container:
```
docker exec -it [container_galera] bash
```

Display status a the galera nodes that contains mariadb:
```
mysql -u root -p -e 'SHOW STATUS LIKE 'wsrep_%';
```

Observe the results:
- variable : wsrep_local_state_comment <br/>
The value Synced indicates that the node is connected to the cluster and operational.
-variable :  wsrep_cluster_size <br/>
The numeric value returned indicates the number of nodes in the cluster.
- variable : wsrep_ready <br/>
A value of ON indicates that this node in which the SQL statement was executed is connected to the cluster and able to handle transactions.



2. Split-Brain Testing
To simulate a crash of a single mariadb process:

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
- check the availability of mariadb less 5 seconds by going to the following address:
```
https://nextcloud.ensg.duckdns.org
```
- authenticate
- to check data persistence in nextcloud:
    - connect as a user
    - observe documents
    - verify that documents in 'Fichiers supprimées' as same as documents recreated

<br>

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
- select 'Last 15 minutes'
- check that it takes less than 10 seconds to have again data
- this last check also permits to visualize data persistance
