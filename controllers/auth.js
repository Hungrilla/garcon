'use strict';

var express = require('express');
var route = new express.Router();
var auth = require('../helpers/auth');
var authMW = require('../middlewares/auth');

module.exports = controller;

function controller(app){
  // # Routes
  route.post('/auth', authMW.facebook, loginUser);

  // # Methods
  function loginUser(req, res){
    var body =  req.body;
    res.json({
      accessToken: auth.sign(body)
    });
  }

  app.use('/api', route);
}
