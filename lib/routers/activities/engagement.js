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
 * @module routes.activities.engagement
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
 * @class Engagement
 * @constructor
 */
exports.Engagement = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * List activities for specific engagement
 *
 * @method getSpecific
 * @param engagementRef {Integer} Engagement reference
 * @param callback {String} Callback function
 * @async
 */
exports.Engagement.prototype.getSpecific = function(engagementRef, callback) {
  debug('running request');
  this.api.client.get('tasks/v2/tasks/contracts/' + engagementRef, {}, callback);
}

/**
 * Assign engagements to the list of activities
 *
 * @method assign
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param engagementRef {Integer} Engagement reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Engagement.prototype.assign = function(company, team, engagementRef, params, callback) {
  debug('running request');
  this.api.client.put('otask/v1/tasks/companies/' + company + '/teams/' + team + '/engagements/' + engagementRef + '/tasks', params, callback);
}

/**
 * Assign to specific engagement the list of activities
 *
 * @method assign
 * @param engagementRef {Integer} Engagement reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Engagement.prototype.assignToEngagement = function(engagementRef, params, callback) {
  debug('running request');
  this.api.client.put('tasks/v2/tasks/contracts/' + engagementRef, params, callback);
}
