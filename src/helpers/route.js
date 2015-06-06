'use strict';

var config = require('../config');

module.exports = {
  register: register
};

/**
 * Registers a Router with Express.
 * @method
 * @param {object} app - Express object.
 * @param {object} routes - Express router object.
 */
function register(app, routes){
  app.use(config.baseURL, routes);
}
