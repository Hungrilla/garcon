var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

var environments = {
  dev: {
    rootPath: rootPath,
    db: {
      host: 'localhost',
      name: 'garcondb',
      user: 'root',
      password: ''
    },
    port: process.env.PORT || 3000
  },
  staging: {
    rootPath: rootPath,
    db: {
      host: 'localhost',
      user: 'me',
      password: 'secret'
    },
    port: process.env.PORT || 3000
  },
  prod: {
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 80
  }
};

module.exports = environments;
