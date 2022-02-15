git clone https://github.com/mahanonu/glusterfs-rest.git
cd glusterfs-rest
git checkout fixing_glusterrest_install
sudo python3.8 setup.py install
sudo glusterrest install

sudo glusterrestd