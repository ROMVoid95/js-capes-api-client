/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Type'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Type'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.Cape = factory(root.GalacticraftCapesApi.ApiClient, root.GalacticraftCapesApi.Type);
  }
}(this, function(ApiClient, Type) {
  'use strict';

  /**
   * Constructs a new <code>Cape</code>.
   * @alias module:model/Cape
   * @class
   * @param name {String} 
   * @param type {module:model/Type} 
   */
  var exports = function(name, type) {
    this.name = name;
    this.type = type;
  };

  /**
   * Constructs a <code>Cape</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cape} obj Optional instance to populate.
   * @return {module:model/Cape} The populated <code>Cape</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = Type.constructFromObject(data['type']);
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/Type} type
   */
  exports.prototype.type = undefined;


  return exports;

}));
