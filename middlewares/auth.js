'use strict';

var authHelper = require('../helpers/auth');

module.exports = {
  authIsValid: authIsValid
};

/**
 * Middleware - validates the user making the request
 * @method
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Callback for the next function.
 */
function authIsValid(req, res, next){
  var accessToken = req.headers['x-auth'];
  var claims = authHelper.verify(accessToken);
  if(!claims){
    res.status(404).json('Access denied: Invalid Token');
  }
  else{
    req.user = {
      email: claims.email,
      thirdPartyAccessToken: claims.accessToken
    };
    next();
  }
}
