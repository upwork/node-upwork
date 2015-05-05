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
 * @module routes.freelancers.search
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
 * @class Search
 * @constructor
 */
exports.Search = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Search Freelancers
 *
 * @method find
 * @param params {Hash} Parameters, i.e. search criteria
 * @param callback {String} Callback function
 * @async
 */
exports.Search.prototype.find = function(params, callback) {
  debug('running request');
  this.api.client.get('profiles/v2/search/providers', params, callback);
}
