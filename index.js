const Logger = require('./logger');

const logger = new Logger();

logger.on('message', function (data) {
    console.log('Called listener', data);
})

logger.log('Hello World');

