/*
 * Galacticraft Capes API
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Type'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Type'));
  } else {
    // Browser globals (root is window)
    if (!root.GalacticraftCapesApi) {
      root.GalacticraftCapesApi = {};
    }
    root.GalacticraftCapesApi.TypeApi = factory(root.GalacticraftCapesApi.ApiClient, root.GalacticraftCapesApi.Type);
  }
}(this, function(ApiClient, Type) {
  'use strict';

  /**
   * Type service.
   * @module api/TypeApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TypeApi. 
   * @alias module:api/TypeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createType operation.
     * @callback module:api/TypeApi~createTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create type
     * @param {module:model/Type} body Created type object
     * @param {module:api/TypeApi~createTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createType = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createType");
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
        '/cape/type', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteType operation.
     * @callback module:api/TypeApi~deleteTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete type
     * @param {String} typeName The name that needs to be deleted
     * @param {module:api/TypeApi~deleteTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteType = function(typeName, callback) {
      var postBody = null;

      // verify the required parameter 'typeName' is set
      if (typeName === undefined || typeName === null) {
        throw new Error("Missing the required parameter 'typeName' when calling deleteType");
      }


      var pathParams = {
        'typeName': typeName
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
        '/cape/type/{typeName}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTypeByName operation.
     * @callback module:api/TypeApi~getTypeByNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Type} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get type by type name
     * @param {String} typeName 
     * @param {module:api/TypeApi~getTypeByNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Type}
     */
    this.getTypeByName = function(typeName, callback) {
      var postBody = null;

      // verify the required parameter 'typeName' is set
      if (typeName === undefined || typeName === null) {
        throw new Error("Missing the required parameter 'typeName' when calling getTypeByName");
      }


      var pathParams = {
        'typeName': typeName
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
      var returnType = Type;

      return this.apiClient.callApi(
        '/cape/type/{typeName}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateType operation.
     * @callback module:api/TypeApi~updateTypeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updated type
     * @param {String} typeName name that need to be updated
     * @param {module:model/Type} body Updated type object
     * @param {module:api/TypeApi~updateTypeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateType = function(typeName, body, callback) {
      var postBody = body;

      // verify the required parameter 'typeName' is set
      if (typeName === undefined || typeName === null) {
        throw new Error("Missing the required parameter 'typeName' when calling updateType");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateType");
      }


      var pathParams = {
        'typeName': typeName
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
        '/cape/type/{typeName}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
