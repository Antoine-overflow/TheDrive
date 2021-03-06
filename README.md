# TheDrive

## 1. Connect to the main VM
sudo apt-get install -y golang-go 

After configure ssh key, run:
```bash
ssh -A root@ensg.duckdns.org
```

Access to loadbalancer ensg.duckdns.org:8080:
- login: admin
- password: password

## 2. Add new VM
### 2.1 Configure connection to new VM

To access the new VM from the main VM for the first time:
```bash
ssh ip_adress
```

Then run :
```bash
apt update \
apt install avahi-daemon
```

Now, you can connect with this command:
```bash
ssh ensg-XX.local
```

Where XX : number(01, 02, ...) of the VM

<br>

### 2.2 Install docker

Run on the XX VM:
```bash
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo usermod -a -G docker $USER
```

<br>


### 2.3 Add a new node

Run on the XX VM.
To add a new manager node on the swarm:
```bash
docker swarm join --token SWMTKN-1-46ckv0krwb7jxnw6r385cenoy3ekebc85rrok2l7hxhkl8fw6i-3aml8nboj0z7jk82gnagll62t 192.168.1.54:2377
```

To add a new worker node on the swarm:
```bash
docker swarm join --token SWMTKN-1-46ckv0krwb7jxnw6r385cenoy3ekebc85rrok2l7hxhkl8fw6i-2c7u2mxlrud604znaipi5g4zn 192.168.1.54:2377
```

### 2.4 Glusterfs

To install Glusterfs on your new node, install git:
`apt-get install git`

Then clone this repository:
`git clone https://github.com/Antoine-overflow/TheDrive`

It will install the glustercli, gluster server, gluster_rest api and its client plugin.

When a new node is created, the `docker-volume-glusterfs.conf` needs to be updated in every node: <br>
`GLUSTERFS_DRIVER_OPTS='-servers ensg-00.local:ensg-01.local:ensg-02.local:ensg-03.local -rest http://ensg-main.local:9000 -gfs-base /var/lib/gluster/volumes'`

You have to add the new node to the -servers parameter.

Go to a node that is already in the cluster and use: 
`gluster peer probe ensg-XX.local`

where XX is the number of your new node.

Finally,launch in your new node:
```
cd TheDrive/glusterfs_config
./launch.sh
```

## 2.5 Nextcloud - Galera/Mariadb - OnlyOffice

To start all the applications services, you have to run the followin commands :  

```
cd TheDrive/app 

./start_app.sh


```

Then go to https://nextcloud.ensg.duckdns.org. 

If you launch the app for the first time, follow the following steps: 

1. Set user and password for the admin as you wish
2. Configure the database by clicking on "database settings" and fill out the following fields : 
- user : user 
- password : type cd .secret and then nano mysql_password . Copy and paste the password.
- database name : nextcloud
- url : node:3306
3. hit "install"
4. Once you're on the main dashboard, go to apps, 
5. Install OnlyOffice and able external storage
6. go to settings/external storage
7. add a new storage with the following fields filled out: 
 - Folder name : local 
 - External Storage : local 
 - Configuration : /var/www/html 
 -  ht the validate button
8. go to the file explorer
9. go to local/config/config.php 
10. dit it and add the following lines 

  'trusted_domains' => 
  array (
    0 => 'nextcloud.ensg.duckdns.org',
    1 => 'nextcloud',
  ),
  'allow_local_remote_servers' => true, 

11. got to settings and choose only office and set the following fields : 

    - ONLYOFFICE Docs address
    https://onlyoffice.ensg.duckdns.org/

    - ONLYOFFICE Docs address for internal requests from the server 
    http://onlyoffice/

    - Server address for internal requests from ONLYOFFICE Docs 
    http://nextcloud/

You can now use OnlyOffice and edit online document in nextcloud.

## Using glusterfs in a service

To use the gluster volume plugin in a service you deploy on a cluster, you need to pass some parameters to docker</br>
in your config file when creating the volumes used. You have an example of a .yml file that uses glusterfs in this github repo:
`exemple.yml`


## Bloc-Note collectif

https://pad.ird.fr/p/ensgTSI
