const express = require('express');

const apiRouter = require('./api-router.js');
const configMiddleWare = require('./configure-middleware');


const server = express();

configMiddleWare(server); 

server.use('/api', apiRouter);

module.exports = server;
