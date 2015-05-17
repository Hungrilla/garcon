'use strict';

var Sequelize = require('sequelize');
var User;

module.exports = {
  init: init,
  findOrCreate: findOrCreate,
  create: create
};

function init(sequelize){
  User = sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    email:{
      type: Sequelize.STRING,
      unique: true
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    lastLogin: {
      type: Sequelize.DATE
    }
  }, {
    freezeTableName: true
  });

  User.sync({force: true}).then(function(){
    console.log('User table synced');
  });

  return User;
};

function findOrCreate(user){
  var where = {
    email: user.email
  };
  var defaults = {
    defaults: user
  };
  return User.findOrCreate(where, defaults);
};

function create(user){
  return User.create(user);
}
