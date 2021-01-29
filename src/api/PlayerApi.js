/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Player'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Player'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.PlayerApi = factory(root.GalacticraftCapesApi.ApiClient, root.GalacticraftCapesApi.Player);
  }
}(this, function(ApiClient, Player) {
  'use strict';

  /**
   * Player service.
   * @module api/PlayerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PlayerApi. 
   * @alias module:api/PlayerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPlayer operation.
     * @callback module:api/PlayerApi~createPlayerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create player
     * @param {module:model/Player} body Created player object
     * @param {module:api/PlayerApi~createPlayerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createPlayer = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPlayer");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/player', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePlayer operation.
     * @callback module:api/PlayerApi~deletePlayerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete player
     * This can only be done by the logged in player.
     * @param {String} playername The name that needs to be deleted
     * @param {module:api/PlayerApi~deletePlayerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePlayer = function(playername, callback) {
      var postBody = null;

      // verify the required parameter 'playername' is set
      if (playername === undefined || playername === null) {
        throw new Error("Missing the required parameter 'playername' when calling deletePlayer");
      }


      var pathParams = {
        'playername': playername
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/player/{playername}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlayerByName operation.
     * @callback module:api/PlayerApi~getPlayerByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Player} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get player by player name
     * @param {String} playername 
     * @param {module:api/PlayerApi~getPlayerByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Player}
     */
    this.getPlayerByName = function(playername, callback) {
      var postBody = null;

      // verify the required parameter 'playername' is set
      if (playername === undefined || playername === null) {
        throw new Error("Missing the required parameter 'playername' when calling getPlayerByName");
      }


      var pathParams = {
        'playername': playername
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Player;

      return this.apiClient.callApi(
        '/player/{playername}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePlayer operation.
     * @callback module:api/PlayerApi~updatePlayerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updated player
     * This can only be done by the logged in player.
     * @param {String} playername name that need to be updated
     * @param {module:model/Player} body Updated player object
     * @param {module:api/PlayerApi~updatePlayerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updatePlayer = function(playername, body, callback) {
      var postBody = body;

      // verify the required parameter 'playername' is set
      if (playername === undefined || playername === null) {
        throw new Error("Missing the required parameter 'playername' when calling updatePlayer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePlayer");
      }


      var pathParams = {
        'playername': playername
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/player/{playername}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
