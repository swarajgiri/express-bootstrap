'use strict';

const _       = require('lodash'),
    minions = [
    'bob',
];

function init(cfg) {
    const payload = {};

    _.forEach(minions, (minion) => {
        payload[minion] = require('./' + minion)(cfg);
    });

    return payload;
}

module.exports = init;
