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
 * @module routes.auth
 */

/**
 * @property entryPoint
 * @type String
 * @default api
 * @static
 * @final
 */
var entryPoint = 'api';

/**
 * @class Auth
 * @constructor
 */
exports.Auth = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * My Info
 *
 * @method getUserInfo
 * @param callback {String} Callback function
 * @async
 */
exports.Auth.prototype.getUserInfo = function(callback) {
  debug('running request');
  this.api.client.get('auth/v1/info', {}, callback);
}
