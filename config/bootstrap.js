'use strict';

module.exports = bootstrap;

function bootstrap(app){
  //require('../controllers/users')(app);
  require('../controllers/auth')(app);
}
