'use strict';

let express   = require('express'),
    router    = express.Router(),
    tmpldir;

// set template directory
router.use(function (req, res, next) {
    tmpldir = req.app.get('config').paths.templates + '/hello';

    next();
});

router.get('/', function (req, res, next) {
    var pageData = {
        'title'     : 'Hello World',
        'say'       : 'Hello World!'
    };

    res.render(tmpldir + '/index', pageData);
});

module.exports = router;
