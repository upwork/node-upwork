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
 * @module routes.hr.clients.applications
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
 * @class Applications
 * @constructor
 */
exports.Applications = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get list of applications
 *
 * @method getList
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Applications.prototype.getList = function(params, callback) {
  debug('running request');
  this.api.client.get('hr/v4/clients/applications', params, callback);
}

/**
 * Get specific application
 *
 * @method getSpecific
 * @param reference {Integer} Application reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Applications.prototype.getSpecific = function(reference, params, callback) {
  debug('running request');
  this.api.client.get('hr/v4/clients/applications' + reference, params, callback);
}
