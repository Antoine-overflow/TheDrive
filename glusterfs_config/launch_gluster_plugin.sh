mv docker-volume-glusterfs-amd64 /usr/local/bin/
mv docker-volume-glusterfs.service /etc/systemd/system/
mkdir /etc/sysconfig
mv docker-volume-glusterfs.conf /etc/sysconfig/
systemctl daemon-reload

systemctl start docker-volume-glusterfs && systemctl enable docker-volume-glusterfs