/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

// To create your own client for OAuth routine,
// your client must support the following methods:
// 1. getAuthorizationUrl - gets request token/secret pair, creates and returns
//    authorization url, based on received data
// 2. getAccessToken(requestToken, requestTokenSecret, verifier, callback) -
//    requests access token/secret pair using known request token/secret pair and verifier
// 3. setAccessToken(token, secret, callback) - sets known access token/secret pair
// 4. get|post|put|delete(path, data, callback) - for GET, POST, PUT and DELETE methods respectively
// 5. setEntryPoint(entryPoint) - allows setup different entry point for base url

/**
 * @module client
 * @requires node-upwork
 */

debug('export client module');

var upwork = require('node-upwork');

/**
 * @class Client
 * @constructor
 */
exports.Client = function(config) {
  debug('starting client')
  debug(config.consumerKey, 'with consumer key');
  debug(config.consumerSecret, 'with consumer secret');

  var o = new upwork(config.consumerKey, config.consumerSecret);
  debug(o, 'got a client');

  return o;
}

/**
 * Set access token key/secret pair
 *
 * @method setAccessToken
 * @param token {String} Access token
 * @param secret {String} Access token secret
 * @param callback {String} Callback
 * @async
 */
upwork.prototype.setAccessToken = function(token, secret, callback) {
  debug('setting access/token pair');
  debug(token, 'token will be setup to');
  debug(secret, 'secret will be setup to');

  this.OAuth.accessToken = token;
  this.OAuth.accessTokenSecret = secret;

  return callback();
}

/**
 * Get authorization URL and request token
 *
 * @method getAuthorizationUrl
 * @param callbackUrl {String} Callback URL
 * @param callback
 * @async
 */
upwork.prototype.getAuthorizationUrl = function(callbackUrl, callback) {
  return this.OAuth.getAuthorizeUrl(callbackUrl, callback);
}

/**
 * Get access token key/secret pair
 *
 * @method getAccessToken
 * @param requestToken {String} Request token
 * @param requestTokenSecret {String} Request token secret
 * @param verifier {String} Verifier got on authorization step
 * @param callback
 * @async
 */
upwork.prototype.getAccessToken = function(requestToken, requestTokenSecret, verifier, callback) {
  return this.OAuth.getAccessToken(requestToken, requestTokenSecret, verifier, callback);
}

/**
 * Specify entry point used in base url
 *
 * @method setEntryPoint
 * @param entryPoint {String} Entry point, e.g. 'api' or 'gds'
 */
upwork.prototype.setEntryPoint = function(entryPoint) {
  debug('updating entry point');
  // a trick to support different entry points in node-upwork
  this.baseUrl = this.baseUrl.replace(/\/api\//i, '/' + entryPoint + '/');
}
