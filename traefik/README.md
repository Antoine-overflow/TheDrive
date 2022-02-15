# Traefik

## How to deploy

`docker stack deploy -c traefik_config.yml traefik`

## How to attache service to traefik
 

### Labels and Networks
        `version: '3'

            services:
                SERVICE_NAME:
                    image: YOUR_IMAGE
                    deploy:
                        labels: #labels to connect traefik to your service
                           - traefik.http.services.SERVICE_NAME.loadbalancer.server.port=USE_PORT_SERVICE
                    networks: #connect your service to traefik network
                       - traefik_default
            networks:# get the traefik network
                traefik_default:
                    external:
                    name: traefik_default`


## How to test if traefik works

Deploy : `docker stack deploy -c whoami_test.yml whoami` <br/>
Run : `curl -H Host:whoami-whoami http://0.0.0.0:81 -v` <br/>
Result should look like :

```Hostname: 9cbd0bd9ac78
IP: 127.0.0.1
IP: 10.0.1.8
IP: 172.18.0.3
RemoteAddr: 10.0.1.4:52628
GET / HTTP/1.1
Host: whoami-whoami
User-Agent: curl/7.74.0
Accept: */*
Accept-Encoding: gzip
X-Forwarded-For: 10.0.0.3
X-Forwarded-Host: whoami-whoami
X-Forwarded-Port: 80
X-Forwarded-Proto: http
X-Forwarded-Server: 7270b888b092
X-Real-Ip: 10.0.0.3```
