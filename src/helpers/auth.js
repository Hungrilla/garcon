'use strict';

var jwt = require('jsonwebtoken');
var tokenConfig = require('./auth');

module.exports = {
  sign: sign,
  verify: verify
};

/**
 * Signs a JWT Token.
 * @method
 * @param {object} payload - payload object for the JWT token.
 * @return {string} JWT Token - signed JWT token
 */
function sign(payload){
  var claims = createClaims(payload);
  return jwt.sign(claims, tokenConfig.apiSecret);
}

/**
 * Verifies a JWT Token.
 * @method
 * @param {string} token - JWT token to be verified.
 * @return {object} claims - returns the claims object from the token.
 */
function verify(token){
  try{
    return jwt.verify(token, tokenConfig.apiSecret);
  }
  catch(exception){
    return false;
  }
}

/**
 * Rehydrates a Token.
 * @method
 * @param {object} claims - claims object for the JWT token.
 * @return {string} JWT Token - signed JWT token
 */
function rehydrateToken(claims){
  //some rehydrate logic for the JWT token
}

/**
 * Create a claims object for the JWT signing.
 * @method
 * @param {object} payload - payload to create claims.
 * @return {string} claims - claims object from the payload.
 */
function createClaims(payload){
  if(!payload.userId || !payload.accessToken){
    return false;
  }
  else{
    return {
      issuer: tokenConfig.issuer,
      expiresInMinutes: tokenConfig.expiryInMinutes,
      subject: payload.userId,
      accessToken: payload.accessToken
    };
  }
}
