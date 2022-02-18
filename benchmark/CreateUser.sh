#!/bin/bash

export OC_PASS=ouioui2567
for i in {1..1000}
do
    su -s /bin/sh www-data gnext_nextcloud -c 'php occ user:add --password-from-env --display-name="users'+$i+'" --group="users" fred'
done