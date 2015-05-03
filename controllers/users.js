var express = require('express');
var route = express.Router();
var routeHelper = require('../helpers/route');

module.exports = controller;

function controller(app) {
  // # Routes
  route.get('/users/:id', getUser);
  route.get('/users', getUsers);

  routeHelper.register(app, route);

  // # Methods
  function getUser(req, res) {
    res.json(req.params.id);
  }

  function getUsers(req, res) {
    res.json(['Wayne', 'Wilson']);
  }

}
