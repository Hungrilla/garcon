/**
 * Created by umayr on 03/05/15.
 */

'use strict';

module.exports = bootstrap;

function bootstrap(app) {
  require('../controllers/users')(app);
}
