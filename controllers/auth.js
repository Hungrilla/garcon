'use strict';

var express = require('express');
var route = new express.Router();
var routeHelper = require('../helpers/route');
var auth = require('../helpers/auth');

module.exports = controller;

function controller(app){
  // # Routes
  route.post('/auth', loginUser);
  route.get('/auth', loginUser);

  routeHelper.register(app, route);

  // # Methods
  function loginUser(req, res){
    var body =  req.body;
    res.json(auth.sign(body));
  }

}
