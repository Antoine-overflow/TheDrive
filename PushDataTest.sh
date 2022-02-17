#!/bin/bash

for i in $(seq 1 $1)
do 
    rclone config create users$i webdav url=https://nextcloud.ensg.duckdns.org/remote.php/dav/files/users$i/ vendor=nextcloud user=users$i pass=ouioui2567 bearer_token=remconfig
done

dd if=/dev/zero of=tests/MaData bs=$2 count=$3

for i in {1..10}
do
    ./PushDataMultiUsers $i&
done
wait