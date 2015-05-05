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
 * @module routes.organization.companies
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
 * @class Companies
 * @constructor
 */
exports.Companies = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Companies Info
 *
 * @method getList
 * @param callback {String} Callback function
 * @async
 */
exports.Companies.prototype.getList = function(callback) {
  debug('running request');
  this.api.client.get('hr/v2/companies', {}, callback);
}

/**
 * Get Specific Company
 *
 * @method getSpecific
 * @param cmpReference {Integer} Company reference
 * @param callback {String} Callback function
 * @async
 */
exports.Companies.prototype.getSpecific = function(cmpReference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/companies/' + cmpReference, {}, callback);
}

/**
 * Get Teams in Company
 *
 * @method getTeams
 * @param cmpReference {Integer} Company reference
 * @param callback {String} Callback function
 * @async
 */
exports.Companies.prototype.getTeams = function(cmpReference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/companies/' + cmpReference + '/teams', {}, callback);
}

/**
 * Get Users in Company
 *
 * @method getUsers
 * @param cmpReference {Integer} Company reference
 * @param callback {String} Callback function
 * @async
 */
exports.Companies.prototype.getUsers = function(cmpReference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/companies/' + cmpReference + '/users', {}, callback);
}
