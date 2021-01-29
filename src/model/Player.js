/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Cape', 'model/GUUID', 'model/Type'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Cape'), require('./GUUID'), require('./Type'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.Player = factory(root.GalacticraftCapesApi.ApiClient, root.GalacticraftCapesApi.Cape, root.GalacticraftCapesApi.GUUID, root.GalacticraftCapesApi.Type);
  }
}(this, function(ApiClient, Cape, GUUID, Type) {
  'use strict';

  /**
   * Constructs a new <code>Player</code>.
   * @alias module:model/Player
   * @class
   * @param uuid {module:model/GUUID} 
   * @param cape {module:model/Cape} 
   */
  var exports = function(uuid, cape) {
    this.uuid = uuid;
    this.cape = cape;
  };

  /**
   * Constructs a <code>Player</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Player} obj Optional instance to populate.
   * @return {module:model/Player} The populated <code>Player</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid'))
        obj.uuid = GUUID.constructFromObject(data['uuid']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('cape'))
        obj.cape = Cape.constructFromObject(data['cape']);
      if (data.hasOwnProperty('allowedCapes'))
        obj.allowedCapes = Type.constructFromObject(data['allowedCapes']);
    }
    return obj;
  }

  /**
   * @member {module:model/GUUID} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/Cape} cape
   */
  exports.prototype.cape = undefined;

  /**
   * @member {module:model/Type} allowedCapes
   */
  exports.prototype.allowedCapes = undefined;


  return exports;

}));
