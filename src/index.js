/*
 * Galacticraft Capes API
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponse', 'model/Cape', 'model/GUUID', 'model/Player', 'model/Type', 'model/User', 'api/CapeApi', 'api/DefaultApi', 'api/PlayerApi', 'api/TypeApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApiResponse'), require('./model/Cape'), require('./model/GUUID'), require('./model/Player'), require('./model/Type'), require('./model/User'), require('./api/CapeApi'), require('./api/DefaultApi'), require('./api/PlayerApi'), require('./api/TypeApi'), require('./api/UserApi'));
  }
}(function(ApiClient, ApiResponse, Cape, GUUID, Player, Type, User, CapeApi, DefaultApi, PlayerApi, TypeApi, UserApi) {
  'use strict';

  /**
   * Galacticraft_Cape_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var GalacticraftCapesApi = require('index'); // See note below*.
   * var xxxSvc = new GalacticraftCapesApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new GalacticraftCapesApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new GalacticraftCapesApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new GalacticraftCapesApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse: ApiResponse,
    /**
     * The Cape model constructor.
     * @property {module:model/Cape}
     */
    Cape: Cape,
    /**
     * The GUUID model constructor.
     * @property {module:model/GUUID}
     */
    GUUID: GUUID,
    /**
     * The Player model constructor.
     * @property {module:model/Player}
     */
    Player: Player,
    /**
     * The Type model constructor.
     * @property {module:model/Type}
     */
    Type: Type,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The CapeApi service constructor.
     * @property {module:api/CapeApi}
     */
    CapeApi: CapeApi,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi,
    /**
     * The PlayerApi service constructor.
     * @property {module:api/PlayerApi}
     */
    PlayerApi: PlayerApi,
    /**
     * The TypeApi service constructor.
     * @property {module:api/TypeApi}
     */
    TypeApi: TypeApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
