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

## Bloc-Note collectif

https://pad.ird.fr/p/ensgTSI

## 2.4 Glusterfs

To install Glusterfs on your new node, install git:
`apt-get install git`

Then clone this repository:
`git clone https://github.com/Antoine-overflow/TheDrive`

Finally launch:
```
cd TheDrive/glusterfs_config
./launch.sh
```

## 2.5 Nextcloud - OnlyOffice

To start nextcloud and onlyoffice run : 
```
cd TheDrive/nextcloud
docker-compose up -d
```

Then go to localhost:8081 and add in the application OnlyOffice then run :
`bash set_configuration.sh`

You can now use OnlyOffice and edit online document in nextcloud.


## 2.6 Tests

Install rclone for Linux with:
```
curl https://rclone.org/install.sh | sudo bash
```

Create a first remote by run in a terminal:
```
rclone config create remote webdav url=http://localhost:81/remote.php/dav/files/admin/ vendor=nextcloud user=user pass=password bearer_token=remote
```
Verify the url in nextcloud/Paramètres/WebDAV.
Choose a user and password that already exist in nextcloud.


<br>

To test, launch for exemple:
```
rclone copy remote:/ /home/formation/Bureau/Docker_cluster/TheDrive/tests/ -progress
```
It permits to copy drive's documents in /home/formation/Bureau/Docker_cluster/TheDrive/tests/ and done some time informations. You can make the oppposite to exchange path/source and path/destination.
