'use strict';

var express     = require('express');
var targetEnv   = process.env.target || 'dev';
var config      = require('./config/environment')[targetEnv];

// # Setup Express App
var app = express();
require('./config/express')(app, config, targetEnv);

// # Setup Database

// # Start Express App
app.listen(config.port);
console.log('Garcon at your service on Port: ' + config.port);
