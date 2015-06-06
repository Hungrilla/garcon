'use strict';

module.exports = bootstrap;

function bootstrap(app){
  // TODO: `app` shouldn't be passed to each and every controller.
  require('../controllers/user')(app);
  require('../controllers/auth')(app);
}
