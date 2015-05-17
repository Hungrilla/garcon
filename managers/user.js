'use strict';

var User = require('../models/user');

module.exports = {
  findOrCreate: findOrCreate
};

/**
 * Finds or creates a new user.
 * @method
 * @param {object} user - user object.
 * @return {object} promise - a promise to the User creation.
 */
function findOrCreate(user){

  var clause = {
    where: {email: user.email},
    defaults: user
  };

  return User.create(user);
}
