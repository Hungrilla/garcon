'use strict';

var express = require('express');
var route = new express.Router(); // TODO: Why we're creating new router every time we create a controller?
var routeHelper = require('../helpers/route');
var auth = require('../helpers/auth');
var authMW = require('../middlewares/auth');
var User = require('../managers/user');

module.exports = controller;

function controller(app){
  // # Routes
  route.post('/auth', authMW.fbAuthValid, loginUser);

  routeHelper.register(app, route);

  // # Methods
  function loginUser(req, res){
    var body =  req.body;
    var userInContext = {
      firstName: req.user.first_name,
      lastName: req.user.last_name,
      email: 'tried@trusted.com',
      lastLogin: new Date()
    };
    // TODO: Since we have added a repository layer, this should be handled by repo via manager.
    User.findOrCreate(userInContext)
      .then(function(user, created){
        console.log(created);
      }, function(error){
        console.log(error);
      });

    res.json({
      accessToken: auth.sign(body)
    });
  }

}
