'use strict';

var Sequelize = require('sequelize');
var env = process.env.target || 'dev';
var db = require('../config/environment')[env].db;

module.exports = sequelize;

function sequelize(){
  return new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}
