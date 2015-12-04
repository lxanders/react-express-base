import express from 'express';
import path from 'path';
import createLoggerMiddleware from './system/createLoggerMiddleware';
import registerRoutes from './registerRoutes';

export default (expressServer, logger) => {
    expressServer.use(createLoggerMiddleware(logger));

    /* eslint-disable new-cap */
    expressServer.use('/', registerRoutes(express.Router()));
    /* eslint-enable new-cap */

    return expressServer;
};
