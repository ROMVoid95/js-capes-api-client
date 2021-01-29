# GalacticraftCapesApi.PlayerApi

All URIs are relative to *https://provider.readonly.ml/v1/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlayer**](PlayerApi.md#createPlayer) | **POST** /player | Create player
[**deletePlayer**](PlayerApi.md#deletePlayer) | **DELETE** /player/{playername} | Delete player
[**getPlayerByName**](PlayerApi.md#getPlayerByName) | **GET** /player/{playername} | Get player by player name
[**updatePlayer**](PlayerApi.md#updatePlayer) | **PUT** /player/{playername} | Updated player


<a name="createPlayer"></a>
# **createPlayer**
> createPlayer(body)

Create player

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.PlayerApi();

var body = new GalacticraftCapesApi.Player(); // Player | Created player object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPlayer(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Player**](Player.md)| Created player object | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deletePlayer"></a>
# **deletePlayer**
> deletePlayer(playername)

Delete player

This can only be done by the logged in player.

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.PlayerApi();

var playername = "playername_example"; // String | The name that needs to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePlayer(playername, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playername** | **String**| The name that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerByName"></a>
# **getPlayerByName**
> Player getPlayerByName(playername)

Get player by player name

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.PlayerApi();

var playername = "playername_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlayerByName(playername, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playername** | **String**|  | 

### Return type

[**Player**](Player.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePlayer"></a>
# **updatePlayer**
> updatePlayer(playername, body)

Updated player

This can only be done by the logged in player.

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');
var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new GalacticraftCapesApi.PlayerApi();

var playername = "playername_example"; // String | name that need to be updated

var body = new GalacticraftCapesApi.Player(); // Player | Updated player object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePlayer(playername, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playername** | **String**| name that need to be updated | 
 **body** | [**Player**](Player.md)| Updated player object | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

