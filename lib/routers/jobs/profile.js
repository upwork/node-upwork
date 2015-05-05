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
 * @module routes.jobs.profile
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
 * @class Profile
 * @constructor
 */
exports.Profile = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get specific Job Profile
 *
 * @method getSpecific
 * @param key {String} Profile key
 * @param callback {String} Callback function
 * @async
 */
exports.Profile.prototype.getSpecific = function(key, callback) {
  debug('running request');
  this.api.client.get('profiles/v1/jobs/' + key, {}, callback);
}
