/**
 * Created by umayr on 03/05/15.
 */

var config = require('../config');

module.exports = {
  register: register
};

function register(app, routes) {
  app.use(config.baseURL, routes);
}
