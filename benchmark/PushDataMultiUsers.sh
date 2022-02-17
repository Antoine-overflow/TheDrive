#!/bin/bash

rclone copy ./tests remote$1:/tests --progress

mkdir ./receptions/tests$1
rclone copy remote$1:/tests ./receptions/tests$1 --progress

rclone purge remote$1:/tests/
cd ./receptions
rm -r ./tests$1
rclone config delete remote$1