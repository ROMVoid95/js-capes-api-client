# GalacticraftCapesApi.CapeApi

All URIs are relative to *https://provider.readonly.ml/v1/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCape**](CapeApi.md#addCape) | **POST** /cape | Add a new cape to the store
[**deleteCape**](CapeApi.md#deleteCape) | **DELETE** /cape/{capeName} | Deletes a cape
[**getCapeByName**](CapeApi.md#getCapeByName) | **GET** /cape/{capeName} | Find cape by name
[**updateCape**](CapeApi.md#updateCape) | **POST** /cape/{capeName} | Updates a cape


<a name="addCape"></a>
# **addCape**
> addCape(body)

Add a new cape to the store

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.CapeApi();

var body = new GalacticraftCapesApi.Cape(); // Cape | Cape object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addCape(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Cape**](Cape.md)| Cape object that needs to be added to the store | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCape"></a>
# **deleteCape**
> deleteCape(capeName)

Deletes a cape

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.CapeApi();

var capeName = "capeName_example"; // String | Cape name to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCape(capeName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **capeName** | **String**| Cape name to delete | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCapeByName"></a>
# **getCapeByName**
> Cape getCapeByName(capeName)

Find cape by name

Returns a single cape

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.CapeApi();

var capeName = "capeName_example"; // String | name of cape to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCapeByName(capeName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **capeName** | **String**| name of cape to return | 

### Return type

[**Cape**](Cape.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCape"></a>
# **updateCape**
> updateCape(capeName)

Updates a cape

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.CapeApi();

var capeName = "capeName_example"; // String | Name of the cape to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCape(capeName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **capeName** | **String**| Name of the cape to update | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

