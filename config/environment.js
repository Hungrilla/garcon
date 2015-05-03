var path      = require('path');
var rootPath  = path.normalize(__dirname + '/../');

var environments = {
  dev: {
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 3000
  },
  staging:{
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 3000
  },
  prod: {
    rootPath: rootPath,
    db: '',
    port: process.env.PORT || 80
  }
};

module.exports = environments;
