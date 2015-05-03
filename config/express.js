'use strict';

var bodyParser  = require('body-parser');
var morgan      = require('morgan');

function appSetup (express, config, targetEnv){
  express.use(bodyParser.json());
  express.use(morgan(targetEnv));
}

module.exports = appSetup;
