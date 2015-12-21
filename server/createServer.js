import express from 'express';
import createLoggerMiddleware from './system/createLoggerMiddleware';
import registerRoutes from './registerRoutes';

export function createServer(expressServer, logger) {
    expressServer.use(createLoggerMiddleware(logger));

    /* eslint-disable new-cap */
    expressServer.use('/', registerRoutes(express.Router()));
    /* eslint-enable new-cap */

    return expressServer;
}
