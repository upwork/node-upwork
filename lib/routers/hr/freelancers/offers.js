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
 * @module routes.hr.contractors.offers
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
 * @class Offers
 * @constructor
 */
exports.Offers = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get list of offers
 *
 * @method getList
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Offers.prototype.getList = function(params, callback) {
  debug('running request');
  this.api.client.get('offers/v1/contractors/offers', params, callback);
}

/**
 * Get specific offer
 *
 * @method getSpecific
 * @param reference {Integer} Offer reference
 * @param callback {String} Callback function
 * @async
 */
exports.Offers.prototype.getSpecific = function(reference, callback) {
  debug('running request');
  this.api.client.get('offers/v1/contractors/offers/' + reference, {}, callback);
}

/**
 * Run specific action
 *
 * @method actions
 * @param reference {Integer} Offer reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Offers.prototype.actions = function(reference, params, callback) {
  debug('running request');
  this.api.client.post('offers/v1/contractors/actions/' + reference, params, callback);
}
