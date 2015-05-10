'use strict';

var bodyParser  = require('body-parser');
var morgan      = require('morgan');

function appSetup (express, config, targetEnv){
  express.use(bodyParser.json());
  express.use(morgan(targetEnv));

  //development settings
  if(!process.env.target){
    express.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
    });
  }

}

module.exports = appSetup;
