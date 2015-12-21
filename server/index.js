'use strict';

require('babel-register');

var express = require('express');
var logger = require('winston');
var createServer = require('./createServer').createServer;

var expressServer = express();
var server = createServer(expressServer, logger);
var port = 3000;

server.listen(port);

logger.info(`Server started on port ${port}`);
