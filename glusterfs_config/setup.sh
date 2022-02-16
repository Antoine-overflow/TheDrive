sudo apt-get update

sudo apt-get install -y python3.8
sudo apt-get install -y gunicorn
sudo apt-get install -y argparse
sudo apt-get install -y flask 
sudo apt-get install -y pyyaml
sudo apt-get install -y glusterfs-server avahi-daemon libnss-mdns
sudo apt-get install -y glusterfs-client

systemctl start glusterd && systemctl enable glusterd