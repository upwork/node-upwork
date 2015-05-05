/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/24/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.organization.users
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
 * @class Users
 * @constructor
 */
exports.Users = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get authenticated user info
 *
 * @method getMyInfo
 * @param callback {String} Callback function
 * @async
 */
exports.Users.prototype.getMyInfo = function(callback) {
  debug('running request');
  this.api.client.get('hr/v2/users/me', {}, callback);
}

/**
 * Get referenced user info
 *
 * @method getSpecific
 * @param userReference {String} User reference ID
 * @param callback {String} Callback function
 * @async
 */
exports.Users.prototype.getSpecific = function(userReference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/users/' + userReference, {}, callback);
}
