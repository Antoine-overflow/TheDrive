
## Data test protocole

#### MariaDB

1.  Replication Testing

Verify that all nodes in galaera cluster have connected to each other. In a node of the docker cluster, enter in a galera container:
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
- check the availability of mariadb less 1 minutes by going to the following address:
```
https://nextcloud.ensg.duckdns.org
```
- authenticate

<br>

#### InfluxDB

To test:

- check the availability of influxdb by going to the following address:
```
https://grafana.ensg.duckdns.org
```
- authenticate
- go to the 'Telegraf Metrics Final' dashboard
- select 'Last 15 minutes'

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
- check that it takes less than 1 minutes to have again data



#### To simulate a network disconnection:

- use iptables or netem to block all TCP/IP traffic to a node
```
https://www.e2enetworks.com/help/knowledge-base/how-to-block-ip-address-on-linux-server/
```