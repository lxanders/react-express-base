import morgan from 'morgan';

function getInfoStream(logger) {
    return {
        write: (message) => {
            logger.info(message);
        }
    };
}

export default (logger) => {
    return morgan('combined', { stream: getInfoStream(logger) });
};
