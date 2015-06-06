'use strict';

var express = require('express');
var route = new express.Router(); // TODO: Why we're creating new router every time we create a controller?
var routeHelper = require('../helpers/route');
var authMW = require('../middlewares/auth');

module.exports = controller;

function controller(app){

  // # Routes
  route.get('/users/:id', authMW.gcAuthValid, getUser);
  route.get('/users', authMW.gcAuthValid, getUsers);

  routeHelper.register(app, route);

  // # Methods
  function getUser(req, res){
    res.json(req.params.id);
  }

  function getUsers(req, res){
    res.json(['Wayne', 'Wilson']);
  }

}
