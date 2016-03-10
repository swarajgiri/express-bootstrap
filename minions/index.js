'use strict';

let _       = require('lodash'),
    minions = [
    'bob',
];

function init(cfg) {
    let payload = {};

    _.each(minions, (minion) => {
        payload[minion] = require('./' + minion)(cfg);
    });

    return payload;
}

module.exports = init;
