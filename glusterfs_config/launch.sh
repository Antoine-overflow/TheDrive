chmod 700 setup.sh
chmod 700 config_glusterrest.sh
chmod 700 launch_gluster_plugin.sh
chmod 700 docker-volume-glusterfs-amd64
mkdir -p /var/lib/gluster/volumes
./setup.sh
./config_glusterrest.sh
./launch_gluster_plugin.sh