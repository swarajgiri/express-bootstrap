'use strict';

let _ = require('lodash'),
    env;

let cfg = {
    'appname'     : 'bootstrap',
    'baseurl'     : process.env.BASEURL || 'http://localhost:8080',
    'paths': {
        'tmp'      : __dirname + '/../web/_tmp',
        'static'   : __dirname + '/../web/static',
        'templates': __dirname + '/../web/static/views'
    },
    'web': {
        'port': 8080
    }
};

env = process.env.NODE_ENV || 'development';
module.exports = _.extend(cfg, require('./' + env));
