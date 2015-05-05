/**
 * Upwork auth library for using with public API by OAuth
 *
 * @package     UpworkAPI
 * @since       09/22/2014
 * @copyright   Copyright 2014(c) Upwork.com
 * @author      Maksym Novozhylov <mnovozhilov@upwork.com>
 * @license     Upwork's API Terms of Use {@link https://developers.upwork.com/api-tos.html}
 */

/**
 * @module config
 */

/**
 * @class Config
 * @constructor
 */
function Config(options) {
  this.consumerKey = options.consumerKey;
  this.consumerSecret = options.consumerSecret;
  this.accessToken = options.accessToken;
  this.accessSecret = options.accessSecret;
  this.signatureMethod = options.signatureMethod || 'HMAC-SHA1';
  this.debug = options.debug || false;
}

module.exports = Config;
