var proxy = require('redbird')({port: 800});
var docker = require('redbird').docker;

docker(proxy).register("127.0.0.1/users", 'sriram/users:v1');
docker(proxy).register("127.0.0.1/accounts", 'sriram/account:v1');

// proxy.register("127.0.0.1/users","localhost:8000/users")