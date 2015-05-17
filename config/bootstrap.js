'use strict';

module.exports = bootstrap;

function bootstrap(app){
  require('../controllers/user')(app);
  require('../controllers/auth')(app);
}
