'use strict';

const Hapi = require('hapi');
const ip = require('ip');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    port: 8000 
});

// Add the route
server.route({
    method: 'GET',
    path:'/account', 
    handler: function (request, reply) {

        return reply({message:'Account Services',server: ip.address()});
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});