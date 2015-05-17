'use strict';

module.exports = models;

/**
 * Initializes models
 * @method
 * @param {object} sequelize - intance of the sequelize object.
 */
function models(sequelize){
  require('../models/user').init(sequelize);
}

