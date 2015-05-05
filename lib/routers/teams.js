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
 * @module routes.teams
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
 * @class Teams
 * @constructor
 */
exports.Teams = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get Teamrooms
 *
 * @method getList
 * @param callback {String} Callback function
 * @async
 */
exports.Teams.prototype.getList = function(callback) {
  debug('running request');
  this.api.client.get('team/v2/teamrooms', {}, callback);
}

/**
 * Get specific team or company
 *
 * @method getSpecific
 * @param team {String} Teamroom or company ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Teams.prototype.getSpecific = function(team, params, callback) {
  debug('running request');
  this.api.client.get('team/v2/teamrooms/' + team, params, callback);
}
