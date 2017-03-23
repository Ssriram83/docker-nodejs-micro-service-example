###Micro Services using nodejs and Docker

Installation: `docker-compose build`

While splitting out into micro services one of the main problem is service discovery. Put in simplest words service discovery answers 'which service runs where?'.

In a simple application - this problem is probably solved by either hard coding or hard wiring by using configurations.  

But imagine if we have to maintain configurations for 50 + docker container. This question becomes a more complex problem as hard coding configuration will be unweildy. Hence the need for service discovery or auto configuration.  

Lot of solutions are present to solve this problem. But in a broad scale these are mostly used solutions:
- Traditional Service Discovery: ETCD\Consul + Reverse Proxy like Nginx
- Zero Conf - Eg: Node JS projects: Seneca Mesh, Cote, Polo
- Dynamic Reverse Proxy with Docker as backend - Eg: [Nginx](https://github.com/jwilder/nginx-proxy), [Traefik](https://traefik.io/), [Redbird] (https://github.com/OptimalBits/redbird)

In this project - we are going to eloborate an example with Traefik as a dynamic reverse proxy and docker, as it is the easiest to start. 

This will be part 1 of a series of projects- as we move on we will explore all the 3 above mentioned options.