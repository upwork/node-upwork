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
 * @module routes.reports.finance.earnings
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
 * @class Earnings
 * @constructor
 */
exports.Earnings = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
  this.api.client.setEntryPoint(this.api.epoint);
}

/**
 * Generate Earning Reports for a Specific Freelancer
 *
 * @method getByFreelancer
 * @param freelancerReference {Integer} Freelancer reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Earnings.prototype.getByFreelancer = function(freelancerReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/providers/' + freelancerReference + '/earnings', params, callback);
}

/**
 * Generate Earning Reports for a Specific Freelancer's Team
 *
 * @method getByFreelancersTeam
 * @param freelancerTeamReference {Integer} Freelancer team reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Earnings.prototype.getByFreelancersTeam = function(freelancerTeamReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/provider_teams/' + freelancerTeamReference + '/earnings', params, callback);
}

/**
 * Generate Earning Reports for a Specific Freelancer's Company
 *
 * @method getByFreelancersCompany
 * @param freelancerCompanyReference {Integer} Freelancer company reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Earnings.prototype.getByFreelancersCompany = function(freelancerCompanyReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/provider_companies/' + freelancerCompanyReference + '/earnings', params, callback);
}

/**
 * Generate Earning Reports for a Specific Buyer's Team
 *
 * @method getByBuyersTeam
 * @param buyerTeamReference {Integer} Buyer team reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Earnings.prototype.getByBuyersTeam = function(buyerTeamReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/buyer_teams/' + buyerTeamReference + '/earnings', params, callback);
}

/**
 * Generate Earning Reports for a Specific Buyer's Company
 *
 * @method getByBuyersCompany
 * @param buyerCompanyReference {Integer} Buyer company reference
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Earnings.prototype.getByBuyersCompany = function(buyerCompanyReference, params, callback) {
  debug('running request');
  this.api.client.get('finreports/v2/buyer_companies/' + buyerCompanyReference + '/earnings', params, callback);
}
