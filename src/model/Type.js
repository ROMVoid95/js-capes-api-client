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
    root.GalacticraftCapesApi.Type = factory(root.GalacticraftCapesApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Constructs a new <code>Type</code>.
   * @alias module:model/Type
   * @class
   * @param type {module:model/Type.TypeEnum} 
   */
  var exports = function(type) {
    this.type = type;
  };

  /**
   * Constructs a <code>Type</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Type} obj Optional instance to populate.
   * @return {module:model/Type} The populated <code>Type</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/Type.TypeEnum} type
   * @default 'modern'
   */
  exports.prototype.type = 'modern';



  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "legacy"
     * @const
     */
    legacy: "legacy",

    /**
     * value: "developer"
     * @const
     */
    developer: "developer",

    /**
     * value: "modern"
     * @const
     */
    modern: "modern"
  };

  return exports;

}));
