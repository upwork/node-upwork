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
 * @module debug
 */

/**
 * @property mode
 * @type Boolean
 * @default false
 */
var mode = false;

/**
 * @class Debug
 */
function Debug(mode) {
  this.mode = mode;
}

/**
 * @method log
 * @param data {String} Data to display
 * @param [label=""] {String} Label
 */
Debug.prototype.log = function(data, label) {
  if (this.mode == true || this.mode == 'true') {
    if (typeof data == 'string' || data instanceof String) {
      if (label) {
        console.log('> ' + label + ': ' + data);
      } else {
        console.log('> ' + data);
      }
    } else {
      console.log(' >> start dump [' + label + '] >>');
      console.log('  ' + data);
      console.log(' >> end dump [' + label + '] >>');
    }
  }
};

module.exports = Debug;
