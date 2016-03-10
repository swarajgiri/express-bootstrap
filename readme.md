[![Code Climate](https://codeclimate.com/github/swarajgiri/express-bootstrap/badges/gpa.svg)](https://codeclimate.com/github/swarajgiri/express-bootstrap)
[![David DM](https://david-dm.org/swarajgiri/express-bootstrap.svg)](https://david-dm.org/swarajgiri/express-bootstrap.svg)
[![Build Status](https://travis-ci.org/swarajgiri/express-bootstrap.svg?branch=master)](https://travis-ci.org/swarajgiri/express-bootstrap)

### Hello world bootstrap using
- Express
- Handlebars

### Requirements
-  Nodejs. Best way to install nodejs is [nvm](https://github.com/creationix/nvm)

### Installation
Add the following lines to `~/.bashrc`
```
source ~/.nvm/nvm.sh
nvm use v4
```

### Run the following commands
```
nvm install v4.3
```

### Install front end dependencies

```
npm install -g bower
bower install
```

### Config
To override default config in `cfg/index.js` add the relevant part to `cfg/development.js`

### Start server
`npm start`

### Run tests
`npm test`

### Logs
Logs are created by `bootstrap/logger.js`

### Modules
- Modules are stored in `core` folder.
- Params that the modules need are passed from `core/index.js` while requiring it.
- All core modules are injected into the `app` and get be accessed via `req.app.get('core').module.method`

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/swarajgiri/express-bootstrap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
