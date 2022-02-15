# TheDrive


## 1. Add new VM
### 1.1 Configure connection to new VM

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

### 1.2 Install docker

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


### 1.3 Add a new node

Run on the XX VM.
To add a new manager node on the swarm:
```bash
docker swarm join --token SWMTKN-1-46ckv0krwb7jxnw6r385cenoy3ekebc85rrok2l7hxhkl8fw6i-3aml8nboj0z7jk82gnagll62t 192.168.1.54:2377
```

To add a new worker node on the swarm:
```bash
docker swarm join --token SWMTKN-1-46ckv0krwb7jxnw6r385cenoy3ekebc85rrok2l7hxhkl8fw6i-2c7u2mxlrud604znaipi5g4zn 192.168.1.54:2377
```