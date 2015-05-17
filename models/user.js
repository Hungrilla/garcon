'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize){
  var User = sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
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
