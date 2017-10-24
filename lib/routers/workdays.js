/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       07/14/2015
 * @copyright   Copyright 2015(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.workdays
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
 * @class Workdays
 * @constructor
 */
exports.Workdays = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Workdays
 *
 * @method getByCompany
 * @param company {String} Company
 * @param fromDate {String} Start date
 * @param tillDate {String} End date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdays.prototype.getByCompany = function(company, fromDate, tillDate, params, callback) {
  debug('running request');
  this.api.client.get('team/v2/workdays/companies/' + company + '/' + fromDate + ',' + tillDate, params, callback);
}

/**
 * Get Work Diary by Contract
 *
 * @method getByContract
 * @param contract {String} Contract ID
 * @param fromDate {String} Start date
 * @param tillDate {String} End date
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Workdays.prototype.getByContract = function(contract, fromDate, tillDate, params, callback) {
  debug('running request');
  this.api.client.get('team/v2/workdays/contracts/' + contract + '/' + fromDate + ',' + tillDate, params, callback);
}
