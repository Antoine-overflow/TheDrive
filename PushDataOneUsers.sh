#!/bin/bash

rclone config create remote webdav url=https://nextcloud.ensg.duckdns.org/remote.php/dav/files/users1/ vendor=nextcloud user=users1 pass=ouioui2567 bearer_token=remconfig
rclone copy ./tests remote:/tests --progress


rclone copy remote:/tests ./receptions --progress

rclone purge remote:/tests/
cd ./receptions
rm -r ./tests
rclone config delete remote