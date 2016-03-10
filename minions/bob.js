'use strict';

module.exports = function (cfg) {
    let Promise = require('bluebird');

    class Bob {
        static says() {
            return new Promise((resolve, reject) => {
                setTimeout(function () {
                    resolve('banana!');
                }, 100);
            });
        }
    }

    return Bob;
};
