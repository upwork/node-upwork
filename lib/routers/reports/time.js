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
 * @module routes.reports.time
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
 * @class Time
 * @constructor
 */
exports.Time = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
  this.api.client.setEntryPoint(this.api.epoint);
}

/**
 * Get by type
 *
 * @method _getUrlByType
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param agency {String} Agency
 * @param hideFinDetails {Boolean} Hides all financial details
 * @return Relative api URL
 * @private
 */
var _getUrlByType = function(company, team, agency, hideFinDetails) {
  debug('preparing url');
  var _url = '';
  if (team) {
    _url = '/teams/' + team;
    if (hideFinDetails) {
      _url = _url + '/hours';
    }
  } else if (agency) {
    _url = '/agencies/' + agency;
  }

  return 'timereports/v1/companies/' + company + _url;
}

/**
 * Generate Time Reports for a Specific Team (with financial info)
 *
 * @method getByTeamFull
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Time.prototype.getByTeamFull = function(company, team, params, callback) {
  debug('running request');
  this.api.client.get(_getUrlByType(company, team), params, callback);
}

/**
 * Generate Time Reports for a Specific Team (hide financial info)
 *
 * @method getByTeamLimited
 * @param company {String} Company ID
 * @param team {String} Team ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Time.prototype.getByTeamLimited = function(company, team, params, callback) {
  debug('running request');
  this.api.client.get(_getUrlByType(company, team, null, true), params, callback);
}

/**
 * Generating Agency Specific Reports
 *
 * @method getByAgency
 * @param company {String} Company ID
 * @param agency {String} Agency ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Time.prototype.getByAgency = function(company, agency, params, callback) {
  debug('running request');
  this.api.client.get(_getUrlByType(company, null, agency), params, callback);
}

/**
 * Generating Company Wide Reports
 *
 * @method getByCompany
 * @param company {String} Company ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Time.prototype.getByCompany = function(company, params, callback) {
  debug('running request');
  this.api.client.get(_getUrlByType(company), params, callback);
}

/**
 * Generating Freelancer Specific Reports (hide financial info)
 *
 * @method getByFreelancerLimited
 * @param freelancerId {String} Freelancer ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Time.prototype.getByFreelancerLimited = function(freelancerId, params, callback) {
  debug('running request');
  this.api.client.get('timereports/v1/providers/' + freelancerId + '/hours', params, callback);
}

/**
 * Generating Freelancer Specific Reports (with financial info)
 *
 * @method getByFreelancerFull
 * @param freelancerId {String} Freelancer ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Time.prototype.getByFreelancerFull = function(freelancerId, params, callback) {
  debug('running request');
  this.api.client.get('timereports/v1/providers/' + freelancerId, params, callback);
}
