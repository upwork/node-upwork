/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module api
 * @requires debug, config, client
 */

debug = function(data, label) {
    var d = new Debug(process.env.UPWORK_API_DEBUG || false);
    d.log(data, label);
}

var Debug  = require('./debug')
  , Config = require('./config')
  , Client = require('./client').Client;

/**
 * @property dataFormat
 * @type String
 * @default json
 * @final
 */
var dataFormat = 'json';

/**
 * @class UpworkApi
 * @constructor
 */
exports.UpworkApi = function(options, client) {
  debug('UpworkApi');
  if (client == null) {
    this.cfg = new Config(options);
    this.client = new Client(this.cfg);
  } else {
    this.client = client;
  }
}

/**
 * Get Authorization Url and request token
 *
 * @method getAuthorizationUrl
 * @param callbackUrl {String} Callback URL
 * @param callback
 * @async
 */
exports.UpworkApi.prototype.getAuthorizationUrl = function(callbackUrl, callback) {
  debug('getting authorization url via UpworkApi');
  this.client.getAuthorizationUrl(callbackUrl, callback);
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
exports.UpworkApi.prototype.getAccessToken = function(requestToken, requestTokenSecret, verifier, callback) {
  debug('getting access token via UpworkApi');
  this.client.getAccessToken(requestToken, requestTokenSecret, verifier, callback);
}

/**
 * Set known access token key/secret pair
 *
 * @method setAccessToken
 * @param token {String} Access token
 * @param secret {String} Access token secret
 * @param callback
 * @async
 */
exports.UpworkApi.prototype.setAccessToken = function(token, secret, callback) {
  debug('set access token');
  this.client.setAccessToken(token, secret, callback);
}
