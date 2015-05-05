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
 * @module routes.hr.jobs
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
 * @class Jobs
 * @constructor
 */
exports.Jobs = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get list of jobs
 *
 * @method getList
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Jobs.prototype.getList = function(params, callback) {
  debug('running request');
  this.api.client.get('hr/v2/jobs', params, callback);
}

/**
 * Get specific job
 *
 * @method getSpecific
 * @param key {String} Job key
 * @param callback {String} Callback function
 * @async
 */
exports.Jobs.prototype.getSpecific = function(key, callback) {
  debug('running request');
  this.api.client.get('hr/v2/jobs/' + key, {}, callback);
}

/**
 * Post a new job
 *
 * @method postJob
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Jobs.prototype.postJob = function(params, callback) {
  debug('running request');
  this.api.client.post('hr/v2/jobs', params, callback);
}

/**
 * Edit existend job
 *
 * @method editJob
 * @param key {String} Job key
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Jobs.prototype.editJob = function(key, params, callback) {
  debug('running request');
  this.api.client.put('hr/v2/jobs/' + key, params, callback);
}

/**
 * Delete existend job
 *
 * @method deleteJob
 * @param key {String} Job key
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Jobs.prototype.deleteJob = function(key, params, callback) {
  debug('running request');
  this.api.client.delete('hr/v2/jobs/' + key, params, callback);
}
