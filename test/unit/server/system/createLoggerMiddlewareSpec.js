import { expect } from 'chai';
import sinon from 'sinon';
import express from 'express';
import supertest from 'supertest';
import createLoggerMiddleware from '../../../../server/system/createLoggerMiddleware';

describe('createLoggerMiddleware', () => {
    it('should use the info method of the passed in logger', () => {
        const logger = { info: sinon.spy() };
        const expressServer = express();
        const loggingMiddleware = createLoggerMiddleware(logger);

        expressServer.use(loggingMiddleware);

        return supertest(expressServer).get('/')
            .expect(() => {
                expect(logger.info).to.have.been.calledOnce;
            });
    });
});
