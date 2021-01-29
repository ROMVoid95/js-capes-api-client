# GalacticraftCapesApi.TypeApi

All URIs are relative to *https://provider.readonly.ml/v1/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createType**](TypeApi.md#createType) | **POST** /cape/type | Create type
[**deleteType**](TypeApi.md#deleteType) | **DELETE** /cape/type/{typeName} | Delete type
[**getTypeByName**](TypeApi.md#getTypeByName) | **GET** /cape/type/{typeName} | Get type by type name
[**updateType**](TypeApi.md#updateType) | **PUT** /cape/type/{typeName} | Updated type


<a name="createType"></a>
# **createType**
> createType(body)

Create type

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.TypeApi();

var body = new GalacticraftCapesApi.Type(); // Type | Created type object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createType(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Type**](Type.md)| Created type object | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteType"></a>
# **deleteType**
> deleteType(typeName)

Delete type

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.TypeApi();

var typeName = "typeName_example"; // String | The name that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteType(typeName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeName** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTypeByName"></a>
# **getTypeByName**
> Type getTypeByName(typeName)

Get type by type name

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.TypeApi();

var typeName = "typeName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTypeByName(typeName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeName** | **String**|  | 

### Return type

[**Type**](Type.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateType"></a>
# **updateType**
> updateType(typeName, body)

Updated type

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.TypeApi();

var typeName = "typeName_example"; // String | name that need to be updated

var body = new GalacticraftCapesApi.Type(); // Type | Updated type object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateType(typeName, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeName** | **String**| name that need to be updated | 
 **body** | [**Type**](Type.md)| Updated type object | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

