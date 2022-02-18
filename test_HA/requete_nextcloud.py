import requests

from datetime import datetime

now = datetime.now()

current_time = now.strftime("%H:%M:%S")
print("Current Time =", current_time) 
 
while true:

    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    grafana = requests.get('https://grafana.ensg.duckdns.org')
    nextcloud = requests.get('https://nextcloud.ensg.duckdns.org')

    # tests
    
    if (grafana.status_code != 200) : 
        print(current_time,' : Grafana error : ',grafana.status_code)
    elif (nextcloud.status_code != 200) : 
        print(current_time,' : Nextcloud error : ',nextcloud.status_code)
    else : 
        print(current_time,' No problems')

    
    print(" ------- \n")

    



