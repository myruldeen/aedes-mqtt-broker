'use strict';

const fs = require('fs');
const instance = require('aedes')();
const logging = require('aedes-logging');

const options = {
    key: fs.readFileSync('certs/key.pem'),
    cert: fs.readFileSync('certs/certificate.pem')
};
const servers = [startTLS()];

logging({
    instance: instance,
    servers: servers
});

function startTLS() {
    return require('tls')
        .createServer(options, instance.handle)
        .listen(8883);
}
