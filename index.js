'use-strict';
const fs = require('fs');
const aedes = require('aedes')();
const port = 8883;

const options = {
    key: fs.readFileSync('certs/key.pem'),
    cert: fs.readFileSync('certs/certificate.pem')
};

const server = require('tls').createServer(options, aedes.handle);

server.listen(port, function() {
    console.log('server started and listening on port ', port);
});
