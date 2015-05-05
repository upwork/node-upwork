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
 * @module routes.hr.roles
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
 * @class Roles
 * @constructor
 */
exports.Roles = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get user roles
 *
 * @method getAll
 * @param callback {String} Callback function
 * @async
 */
exports.Roles.prototype.getAll = function(callback) {
  debug('running request');
  this.api.client.get('hr/v2/userroles', {}, callback);
}

/**
 * Get by specific user
 *
 * @method getBySpecificUser
 * @param reference {Integer} User reference
 * @param callback {String} Callback function
 * @async
 */
exports.Roles.prototype.getBySpecificUser = function(reference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/userroles/' + reference, {}, callback);
}
