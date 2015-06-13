'use strict';

var authHelper = require('../helpers/auth');
var request = require('request');

module.exports = {
  garcon: garcon,
  facebook: facebook
};

/**
 * Middleware - validates the user making the request
 * @method
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Callback for the next function.
 */
function garcon(req, res, next){
  var accessToken = req.headers['x-auth'];
  var claims = authHelper.verify(accessToken);
  if(!claims){
    res.status(401).json('Access denied: Invalid Token');
  }
  else{
    req.user = {
      userId: claims.subject,
      thirdPartyAccessToken: claims.accessToken
    };
    next();
  }
}

/**
 * Middleware - verifies Facebook accessToken
 * @method
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Callback for the next function.
 */
function facebook(req, res, next){
  var url = 'https://graph.facebook.com/me?access_token=' + req.body.accessToken;
  request(url, function (error, response){
    var body = JSON.parse(response.body);
    if((!error && response.statusCode === 200) || (!body.error)){
      next();
    }
    else{
      res.status(401).send(body.error.message);
    }
  });
}
