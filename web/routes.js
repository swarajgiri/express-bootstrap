module.exports = function (app) {
    app.use('/', require('./handlers/home'));
};
