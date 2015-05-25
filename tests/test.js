var assert = require('assert');

describe('test', function () {
    describe('#touch', function () {
        it('should set return true', function (done) {
            setTimeout(function(){
                assert.ok(true);
                done();
            }, 2000);
        });
    });
});
