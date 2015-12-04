import express from 'express';
import logger from 'winston';
import createServer from './createServer';

const expressServer = express();
const server = createServer(expressServer, logger);
const port = 3000;

server.listen(port);

logger.info(`Server started on port ${port}`);
