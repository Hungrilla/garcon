'use strict';

var express = require('express');
var route = new express.Router();
var routeHelper = require('../helpers/route');
var auth = require('../middlewares/auth');

module.exports = controller;

function controller(app){
  // # Middleware
  route.use(auth.authIsValid);

  // # Routes
  route.get('/users/:id', getUser);
  route.get('/users', getUsers);

  routeHelper.register(app, route);

  // # Methods
  function getUser(req, res){
    res.json(req.params.id);
  }

  function getUsers(req, res){
    res.json(['Wayne', 'Wilson']);
  }

}
