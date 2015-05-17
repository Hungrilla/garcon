'use strict';

module.exports = models;

function models(sequelize){
  require('../models/user')(sequelize);
}

