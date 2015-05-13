### Hello world bootstrap using
- Express
- Handlebars

### Requirements
-  Nodejs. Best way to install nodejs is [nvm](https://github.com/creationix/nvm)

### Installation
Add the following lines to `~/.bashrc`
```
source ~/.nvm/nvm.sh
nvm use 0.12
```

### Run the following commands
```
nvm install v0.12.2
npm install
```

### Install front end dependencies

```
npm install -g bower
bower install
```

### Start server
`node --harmony bootstrap/app.js | ./node_modules/.bin/bunyan`
