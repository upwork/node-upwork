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
 * @module routes.workdiary
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
 * @class Workdiary
 * @constructor
 */
exports.Workdiary = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Workdiary
 *
 * @method get
 * @param company {String} Company
 * @param username {String} Username
 * @param date {String} Date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdiary.prototype.get = function(company, username, date, params, callback) {
  debug('running request');
  this.api.client.get('team/v1/workdiaries/' + company + '/' + username + '/' + date, params, callback);
}

/**
 * Get Work Diary by Contract
 *
 * @method getByContract
 * @param contract {String} Contract ID
 * @param date {String} Date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdiary.prototype.getByContract = function(contract, date, params, callback) {
  debug('running request');
  this.api.client.get('team/v2/workdiaries/contracts/' + contract + '/' + date, params, callback);
}
