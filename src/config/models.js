'use strict';

module.exports = models;

/**
 * Initializes models
 * @method
 * @param {object} sequelize - intance of the sequelize object.
 */
function models(sequelize){
  require('../../lib/models/user').init(sequelize);
  // TODO: `../../` again. Needs to be fixed.
}

