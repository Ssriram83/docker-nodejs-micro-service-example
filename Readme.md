###Micro Services using nodejs and Docker

Installation: `docker-compose build`

While splitting out into micro services one of the main problem is service discovery. Put in simplest terms service discovery answers 'which service runs where?'.

In a simple application - this problem is probably solved by either hard coding or hard wiring by using configurations.  

But imagine if we have to maintain configurations as we add more nodes. This question becomes a more complex problem with introduction of containerization with Docker. While Docker makes it super simple to scale, it becomes super complex for service discovery.  

Lot of solutions are present to solve this problem. But in a broad scale these are mostly used solutions:
- Service Discovery [ETCD\Consul] + Nginx
- Zero Conf - Eg: Node JS projects: Seneca Mesh, Cote, Polo
- Dynamic Reverse Proxy

In this project - we are going to eloborate an example with dynamic reverse proxy and docker. 


