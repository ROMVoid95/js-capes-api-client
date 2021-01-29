# GalacticraftCapesApi.DefaultApi

All URIs are relative to *https://provider.readonly.ml/v1/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pingGet**](DefaultApi.md#pingGet) | **GET** /ping | Server heartbeat operation


<a name="pingGet"></a>
# **pingGet**
> ApiResponse pingGet()

Server heartbeat operation

### Example
```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');

var apiInstance = new GalacticraftCapesApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pingGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

