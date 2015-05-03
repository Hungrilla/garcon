'use strict';

var config = require('../config');

module.exports = {
  register: register
};

function register(app, routes){
  app.use(config.baseURL, routes);
}
