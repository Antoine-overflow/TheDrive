git clone https://github.com/mahanonu/glusterfs-rest.git
cd glusterfs-rest
git checkout fixing_glusterrest_install
sudo python3 setup.py install
sudo glusterrest install

mv gluster_rest.service /etc/systemd/system/

systemctl daemon-reload
systemctl start gluster_rest && systemctl enable gluster_rest