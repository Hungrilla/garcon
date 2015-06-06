'use strict';

var User = require('../../lib/models/user');
// TODO: Wtf?! Need to find an elegant solution that doesn't involve `../../../`

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
  return User.create(user);
}
