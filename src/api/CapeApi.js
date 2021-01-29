/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Cape'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cape'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.CapeApi = factory(root.GalacticraftCapesApi.ApiClient, root.GalacticraftCapesApi.Cape);
  }
}(this, function(ApiClient, Cape) {
  'use strict';

  /**
   * Cape service.
   * @module api/CapeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CapeApi. 
   * @alias module:api/CapeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCape operation.
     * @callback module:api/CapeApi~addCapeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new cape to the store
     * @param {module:model/Cape} body Cape object that needs to be added to the store
     * @param {module:api/CapeApi~addCapeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addCape = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCape");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cape', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCape operation.
     * @callback module:api/CapeApi~deleteCapeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a cape
     * @param {String} capeName Cape name to delete
     * @param {module:api/CapeApi~deleteCapeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCape = function(capeName, callback) {
      var postBody = null;

      // verify the required parameter 'capeName' is set
      if (capeName === undefined || capeName === null) {
        throw new Error("Missing the required parameter 'capeName' when calling deleteCape");
      }


      var pathParams = {
        'capeName': capeName
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
        '/cape/{capeName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCapeByName operation.
     * @callback module:api/CapeApi~getCapeByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cape} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cape by name
     * Returns a single cape
     * @param {String} capeName name of cape to return
     * @param {module:api/CapeApi~getCapeByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cape}
     */
    this.getCapeByName = function(capeName, callback) {
      var postBody = null;

      // verify the required parameter 'capeName' is set
      if (capeName === undefined || capeName === null) {
        throw new Error("Missing the required parameter 'capeName' when calling getCapeByName");
      }


      var pathParams = {
        'capeName': capeName
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
      var returnType = Cape;

      return this.apiClient.callApi(
        '/cape/{capeName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCape operation.
     * @callback module:api/CapeApi~updateCapeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a cape
     * @param {String} capeName Name of the cape to update
     * @param {module:api/CapeApi~updateCapeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCape = function(capeName, callback) {
      var postBody = null;

      // verify the required parameter 'capeName' is set
      if (capeName === undefined || capeName === null) {
        throw new Error("Missing the required parameter 'capeName' when calling updateCape");
      }


      var pathParams = {
        'capeName': capeName
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cape/{capeName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
