'use strict';

const express = require('express'),
    router  = express.Router();

let tmpldir;

// set template directory
router.use((req, res, next) => {
    tmpldir = req.app.get('config').paths.templates + '/hello';

    next();
});

router.get('/', async (req, res, next) => {
    const pageData = {
        'title'     : 'Minions say',
        'say'       : await req.app.get('minions').bob.says()
    };

    res.render(tmpldir + '/index', pageData);
});

module.exports = router;
