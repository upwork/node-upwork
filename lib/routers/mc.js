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
 * @module routes.mc
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
 * Message Center
 *
 * @class Mc
 * @constructor
 */
exports.Mc = function(api) {
  this.api = api;
  this.api.epoint = entryPoint;
}

/**
 * Get trays
 *
 * @method getTrays
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.getTrays = function(callback) {
  debug('running request');
  this.api.client.get('mc/v1/trays', {}, callback);
}

/**
 * Get tray by type
 *
 * @method getTrayByType
 * @param username {String} Username
 * @param type {String} Tray type/name
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.getTrayByType = function(username, type, callback) {
  debug('running request');
  this.api.client.get('mc/v1/trays/' + username + '/' + type, {}, callback);
}

/**
 * Get thread details
 *
 * @method getThreadDetails
 * @param username {String} Username
 * @param threadId {Integer} Thread ID
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.getThreadDetails = function(username, threadId, callback) {
  debug('running request');
  this.api.client.get('mc/v1/threads/' + username + '/' + threadId, {}, callback);
}

/**
 * Get a specific thread by context
 *
 * @method getThreadByContext
 * @param username {String} Username
 * @param jobKey {String} Job key
 * @param applicationId {Integer} Application ID
 * @param [context='Interviews'] {String} Context
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.getThreadByContext = function(username, jobKey, applicationId, context, callback) {
  debug('running request');
  context = context || 'Interviews';
  this.api.client.get('mc/v1/contexts/' + username + '/' + context + ':' + jobKey + ':' + applicationId, {}, callback);
}

/**
 * Get a specific thread by context (last message content)
 *
 * @method getThreadByContextLastPosts
 * @param username {String} Username
 * @param jobKey {String} Job key
 * @param applicationId {Integer} Application ID
 * @param [context='Interviews'] {String} Context
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.getThreadByContextLastPosts = function(username, jobKey, applicationId, context, callback) {
  debug('running request');
  context = context || 'Interviews';
  this.api.client.get('mc/v1/contexts/' + username + '/' + context + ':' + jobKey + ':' + applicationId + '/last_posts', {}, callback);
}

/**
 * Update thread based on user actions
 *
 * @method markThread
 * @param username {String} Username
 * @param threadId {Integer} Thread ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.markThread = function(username, threadId, params, callback) {
  debug('running request');
  this.api.client.put('mc/v1/threads/' + username + '/' + threadId, params, callback);
}

/**
 * Send new message
 *
 * @method startNewThread
 * @param username {String} Username
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.startNewThread = function(username, params, callback) {
  debug('running request');
  this.api.client.post('mc/v1/threads/' + username, params, callback);
}

/**
 * Reply to existend thread
 *
 * @method replyToThread
 * @param username {String} Username
 * @param threadId {Integer} Thread ID
 * @param params {Hash} Parameters
 * @param callback {String} Callback function
 * @async
 */
exports.Mc.prototype.replyToThread = function(username, threadId, params, callback) {
  debug('running request');
  this.api.client.post('mc/v1/threads/' + username + '/' + threadId, params, callback);
}
