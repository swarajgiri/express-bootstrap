'use strict';

const express    = require('express'),
    config       = require('../cfg'),
    app          = express(),
    exphbs       = require('express-handlebars'),
    compress     = require('compression'),
    hpp          = require('hpp'),
    bodyParser   = require('body-parser'),
    log          = require('./logger'),
    minions      = require('../minions');

// Set config
app.set('config', config);

app.use(bodyParser.urlencoded({
  extended: true
}));

// Prevent parameter pollution
app.use(hpp());

// Use gzip
app.use(compress());

app.set('etag', 'strong');

// Set views dir
app.set('views', app.get('config').paths.templates);

// Serve static files
app.use('/static', express.static(app.get('config').paths.static));

// Configure handlebars
const hbs = exphbs.create({
    extname:'hbs',
    layoutsDir:  app.get('config').paths.templates + '/layouts',
    defaultLayout: 'main',
    partialsDir: [
        app.get('config').paths.templates + '/partials/'
    ]
});

// Initialize engine
app.engine('hbs', hbs.engine);

// Set engine
app.set('view engine', 'hbs');

// Enable view cache
app.enable('view cache');

// Set config
app.set('config', config);

// INIT minions
app.set('minions', minions(config));

// Load routes
require('../web/routes')(app);

// Trust the X-Forwarded-* header
app.enable('trust proxy');

// Create a simple representation of request data
app.use((req, res, next) => {
    req.logdata = {
        'method': req.method,
        'url'   : req.url,
        'query' : req.query,
        'body'  : req.body,
        'ip'    : req.ip
    };

    next();
});

// Log all requests
app.use((req, res, next) => {
    log.info('Request', req.logdata);

    next();
});

// Set req._data = {}
app.use((req, res, next) => {
    req._data = {};
    next();
});

// Handle 404
app.use((req, res) => {
    log.warn('404', {
        'method': req.method,
        'url'   : req.url,
        'query' : req.query,
        'ip'    : req.ip
    });

    res.status(404);
    res.send('404: Page not found');
});

// Handle 500 errors
app.use((err, req, res, next) => {
    if (! err) {
        return next();
    }

    log.error('500', {
        'method': req.method,
        'url'   : req.url,
        'query' : req.query,
        'ip'    : req.ip,
        'error' : err
    });

    res.status(500);
    res.send('500: Internal server error');
});

app.listen(app.get('config').web.port);
log.info('Listening on port %s', app.get('config').web.port);
