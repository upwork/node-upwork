/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/23/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.payments
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
 * Custom Payments
 *
 * @class Payments
 * @constructor
 */
exports.Payments = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Submit a Custom Bonus
 *
 * @method submitBonus
 * @param teamReference {Integer} Team reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Payments.prototype.submitBonus = function(teamReference, params, callback) {
  debug('running request');
  this.api.client.post('hr/v2/teams/' + teamReference + '/adjustments', params, callback);
}
