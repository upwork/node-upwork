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
 * @module routes.snapshot
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
 * Snapshot Info
 *
 * @class Snapshot
 * @constructor
 */
exports.Snapshot = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get snaphot info
 *
 * @method get
 * @param company {String} Company
 * @param username {String} Username
 * @param ts {String} Timestamp
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.get = function(company, username, ts, callback) {
  debug('running request');
  this.api.client.get('team/v1/snapshots/' + company + '/' + username + '/' + ts, {}, callback);
}

/**
 * Update snapshot
 *
 * @method update
 * @param company {String} Company
 * @param username {String} Username
 * @param ts {String} Timestamp
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.update = function(company, username, ts, params, callback) {
  debug('running request');
  this.api.client.put('team/v1/snapshots/' + company + '/' + username + '/' + ts, params, callback);
}

/**
 * Delete snaphot
 *
 * @method delete
 * @param company {String} Company
 * @param username {String} Username
 * @param ts {String} Timestamp
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.delete = function(company, username, ts, callback) {
  debug('running request');
  this.api.client.delete('team/v1/snapshots/' + company + '/' + username + '/' + ts, {}, callback);
}

/**
 * Get snaphot info by specific contract
 *
 * @method get
 * @param contract {Integer} Contract ID
 * @param ts {String} Timestamp
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.getByContract = function(contract, ts, callback) {
  debug('running request');
  this.api.client.get('team/v2/snapshots/contracts/' + contract + '/' + ts, {}, callback);
}

/**
 * Update snapshot by specific contract
 *
 * @method update
 * @param contract {Integer} Contract ID
 * @param ts {String} Timestamp
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.updateByContract = function(contract, ts, params, callback) {
  debug('running request');
  this.api.client.put('team/v2/snapshots/contracts/' + contract + '/' + ts, params, callback);
}

/**
 * Delete snaphot by specific contract
 *
 * @method delete
 * @param contract {Integer} Contract ID
 * @param ts {String} Timestamp
 * @param callback {String} Callback function
 * @async
 */
exports.Snapshot.prototype.deleteByContract = function(contract, ts, callback) {
  debug('running request');
  this.api.client.delete('team/v2/snapshots/contracts/' + contract + '/' + ts, {}, callback);
}
