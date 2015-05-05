/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/26/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module routes.reports.finance.accounts
 */

/**
 * @property entryPoint
 * @type String
 * @default gds
 * @static
 * @final
 */
var entryPoint = 'gds';

/**
 * @class Accounts
 * @constructor
 */
exports.Accounts = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
  this.api.client.setEntryPoint(this.api.epoint);
}

/**
 * Generate Financial Reports for an owned Account
 *
 * @method getOwned
 * @param freelancerReference {Integer} Freelancer reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Accounts.prototype.getOwned = function(freelancerReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/financial_account_owner/' + freelancerReference, params, callback);
}

/**
 * Generate Financial Reports for a Specific Account
 *
 * @method getSpecific
 * @param entityReference {Integer} Entity reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Accounts.prototype.getSpecific = function(entityReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/financial_accounts/' + entityReference, params, callback);
}
