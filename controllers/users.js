var express       = require('express');
var route         = express.Router();

module.exports = controller;

function controller (app){
  // # Routes
  route.get('/users/:id', getUser);
  route.get('/users', getUsers);

  // # Methods
  function getUser (req, res){
    res.json(req.params.id);
  }

  function getUsers (req, res){
    res.json(['one', 'two']);
  }
}
