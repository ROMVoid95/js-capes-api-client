/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GUUID', 'model/Player'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GUUID'), require('./Player'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.User = factory(root.GalacticraftCapesApi.ApiClient, root.GalacticraftCapesApi.GUUID, root.GalacticraftCapesApi.Player);
  }
}(this, function(ApiClient, GUUID, Player) {
  'use strict';

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid'))
        obj.uuid = GUUID.constructFromObject(data['uuid']);
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('player'))
        obj.player = Player.constructFromObject(data['player']);
    }
    return obj;
  }

  /**
   * @member {module:model/GUUID} uuid
   */
  exports.prototype.uuid = undefined;

  /**
   * @member {String} username
   */
  exports.prototype.username = undefined;

  /**
   * @member {module:model/Player} player
   */
  exports.prototype.player = undefined;


  return exports;

}));
