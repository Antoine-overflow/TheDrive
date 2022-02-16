#!/bin/bash

rclone config create remote webdav url=http://localhost:8087/remote.php/dav/files/admin/ vendor=nextcloud user=admin pass=passwordCMAlla bearer_token=remconfig
rclone copy /home/formation/Bureau/Docker_cluster/TheDrive/launch_tests/tests remote:/ --progress

rm -r /home/formation/Bureau/Docker_cluster/TheDrive/launch_tests/tests
mkdir /home/formation/Bureau/Docker_cluster/TheDrive/launch_tests/tests/tests

rclone copy remote:/tests /home/formation/Bureau/Docker_cluster/TheDrive/launch_tests/tests/tests --progress

rclone purge remote:/tests
rclone config delete remote
