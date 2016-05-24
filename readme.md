[![Code Climate](https://codeclimate.com/github/swarajgiri/express-bootstrap/badges/gpa.svg)](https://codeclimate.com/github/swarajgiri/express-bootstrap)
[![David DM](https://david-dm.org/swarajgiri/express-bootstrap.svg)](https://david-dm.org/swarajgiri/express-bootstrap.svg)
[![Build Status](https://travis-ci.org/swarajgiri/express-bootstrap.svg?branch=master)](https://travis-ci.org/swarajgiri/express-bootstrap)

### How i structure my apps, using
- Express
- Handlebars
- Requirejs

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
npm install -g bower nodemon
bower install
```

### Config
To override default config in `cfg/index.js` add the relevant part to `cfg/development.js`

### Start servers
- `npm start`

- `npm run start:dev` - Watch for file changes and restart server. It's a pain in the ass to not do so.

### Run tests
`npm test`

### Logs
Logs are created by `bootstrap/logger.js`

### Modules
- Modules are stored in `minions` folder.
- Params that the modules need are passed from `minions/index.js` while requiring it.
- All minions are injected into `app` and then can be accessed via `req.app.get('minions').module.method`

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/swarajgiri/express-bootstrap/trend.png)](https://bitdeli.com/free "Bitdeli Badge")




