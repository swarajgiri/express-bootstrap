var _ = require('lodash');

var modules = [
    'testModule',
];

function init(cfg) {
    var core = {};

    _.each(modules, function (m) {
        core[m] = require('./' + m)(cfg);
    });

    return core;
}

module.exports = init;
