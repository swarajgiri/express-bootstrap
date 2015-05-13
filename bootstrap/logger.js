var bunyan = require('bunyan');
var cfg = require('../cfg');

var log = bunyan.createLogger({
    name: cfg.appname,
    streams: [
        {
            stream: process.stdout,
            level: 'debug'
        },
        {
            path :  cfg.appname + '.log',
            level: 'trace'
        }
    ],
    serializers: {
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    }
});

module.exports = log;
