/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.GUUID = factory(root.GalacticraftCapesApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Constructs a new <code>GUUID</code>.
   * @alias module:model/GUUID
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GUUID</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GUUID} obj Optional instance to populate.
   * @return {module:model/GUUID} The populated <code>GUUID</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('dashed'))
        obj.dashed = ApiClient.convertToType(data['dashed'], 'String');
      if (data.hasOwnProperty('plain'))
        obj.plain = ApiClient.convertToType(data['plain'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} dashed
   */
  exports.prototype.dashed = undefined;

  /**
   * @member {String} plain
   */
  exports.prototype.plain = undefined;


  return exports;

}));
