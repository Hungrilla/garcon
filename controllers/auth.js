'use strict';

var express = require('express');
var route = new express.Router();
var routeHelper = require('../helpers/route');
var auth = require('../helpers/auth');
var request = require('request');
var authMW = require('../middlewares/auth');


module.exports = controller;

function controller(app){
  // # Routes
  route.post('/auth/fb', authMW.fbAuthValid, loginUser);

  routeHelper.register(app, route);

  // # Methods
  function loginUser(req, res){
    var body =  req.body;
    res.json(auth.sign(body));
  }

}
