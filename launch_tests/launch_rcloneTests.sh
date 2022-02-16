#!/bin/bash

rclone config create remote webdav url=http://localhost:81/remote.php/dav/files/admin/ vendor=nextcloud user=admin pass=passwordCMAlla bearer_token=remconfig
rclone copy ~/TheDrive/launch_tests/tests remote:/ --progress

rm -r ~/TheDrive/launch_tests/tests/tests
mkdir ~/TheDrive/launch_tests/tests/tests

rclone copy remote:/tests ~/TheDrive/launch_tests/tests/tests --progress

rclone purge remote:/tests
rclone config delete remote
