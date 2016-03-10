'use strict';

let express = require('express'),
    router  = express.Router(),
    wrap    = require('co-express'),
    tmpldir;

// set template directory
router.use((req, res, next) => {
    tmpldir = req.app.get('config').paths.templates + '/hello';

    next();
});

router.get('/', wrap(function* (req, res, next) {
    let pageData = {
        'title'     : 'Minions say',
        'say'       : yield req.app.get('minions').bob.says()
    };

    res.render(tmpldir + '/index', pageData);
}));

module.exports = router;
