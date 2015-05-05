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
 * @module routes.hr.interviews
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
 * @class Interviews
 * @constructor
 */
exports.Interviews = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Invite to interview
 *
 * @method invite
 * @param jobKey {String} Job key
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Interviews.prototype.invite = function(jobKey, params, callback) {
  debug('running request');
  this.api.client.post('hr/v1/jobs/' + jobKey + '/candidates', params, callback);
}
