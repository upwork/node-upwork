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
 * @module routes.organization.teams
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
 * Get Teams Info
 *
 * @method getList
 * @param callback {String} Callback function
 * @async
 */
exports.Teams.prototype.getList = function(callback) {
  debug('running request');
  this.api.client.get('hr/v2/teams', {}, callback);
}

/**
 * Get Users in Team
 *
 * @method getUsersInTeam
 * @param teamReference {Integer} Team reference
 * @param callback {String} Callback function
 * @async
 */
exports.Teams.prototype.getUsersInTeam = function(teamReference, callback) {
  debug('running request');
  this.api.client.get('hr/v2/teams/' + teamReference + '/users', {}, callback);
}
