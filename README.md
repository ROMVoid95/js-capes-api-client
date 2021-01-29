# galacticraft_capes_api

JavaScript client for galacticraft_capes_api
Galacticraft Cape API

- API version: 1.0.0
- Package version: 1.0.0
For more information, please visit [https://discord.gg/galacticraft](https://discord.gg/galacticraft)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install galacticraft_capes_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your galacticraft_capes_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('galacticraft_capes_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/galacticraft_capes_api
then install it via:

```shell
    npm install YOUR_USERNAME/galacticraft_capes_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GalacticraftCapesApi = require('galacticraft_capes_api');

var defaultClient = GalacticraftCapesApi.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix['api_key'] = "Token"

var api = new GalacticraftCapesApi.CapeApi()

var body = new GalacticraftCapesApi.Cape(); // {Cape} Cape object that needs to be added to the store


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.addCape(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://provider.readonly.ml/v1/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GalacticraftCapesApi.CapeApi* | [**addCape**](docs/CapeApi.md#addCape) | **POST** /cape | Add a new cape to the store
*GalacticraftCapesApi.CapeApi* | [**deleteCape**](docs/CapeApi.md#deleteCape) | **DELETE** /cape/{capeName} | Deletes a cape
*GalacticraftCapesApi.CapeApi* | [**getCapeByName**](docs/CapeApi.md#getCapeByName) | **GET** /cape/{capeName} | Find cape by name
*GalacticraftCapesApi.CapeApi* | [**updateCape**](docs/CapeApi.md#updateCape) | **POST** /cape/{capeName} | Updates a cape
*GalacticraftCapesApi.DefaultApi* | [**pingGet**](docs/DefaultApi.md#pingGet) | **GET** /ping | Server heartbeat operation
*GalacticraftCapesApi.PlayerApi* | [**createPlayer**](docs/PlayerApi.md#createPlayer) | **POST** /player | Create player
*GalacticraftCapesApi.PlayerApi* | [**deletePlayer**](docs/PlayerApi.md#deletePlayer) | **DELETE** /player/{playername} | Delete player
*GalacticraftCapesApi.PlayerApi* | [**getPlayerByName**](docs/PlayerApi.md#getPlayerByName) | **GET** /player/{playername} | Get player by player name
*GalacticraftCapesApi.PlayerApi* | [**updatePlayer**](docs/PlayerApi.md#updatePlayer) | **PUT** /player/{playername} | Updated player
*GalacticraftCapesApi.TypeApi* | [**createType**](docs/TypeApi.md#createType) | **POST** /cape/type | Create type
*GalacticraftCapesApi.TypeApi* | [**deleteType**](docs/TypeApi.md#deleteType) | **DELETE** /cape/type/{typeName} | Delete type
*GalacticraftCapesApi.TypeApi* | [**getTypeByName**](docs/TypeApi.md#getTypeByName) | **GET** /cape/type/{typeName} | Get type by type name
*GalacticraftCapesApi.TypeApi* | [**updateType**](docs/TypeApi.md#updateType) | **PUT** /cape/type/{typeName} | Updated type
*GalacticraftCapesApi.UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user | Create user
*GalacticraftCapesApi.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
*GalacticraftCapesApi.UserApi* | [**getUserByName**](docs/UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
*GalacticraftCapesApi.UserApi* | [**loginUser**](docs/UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
*GalacticraftCapesApi.UserApi* | [**logoutUser**](docs/UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
*GalacticraftCapesApi.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /user/{username} | Updated user


## Documentation for Models

 - [GalacticraftCapesApi.ApiResponse](docs/ApiResponse.md)
 - [GalacticraftCapesApi.Cape](docs/Cape.md)
 - [GalacticraftCapesApi.GUUID](docs/GUUID.md)
 - [GalacticraftCapesApi.Player](docs/Player.md)
 - [GalacticraftCapesApi.Type](docs/Type.md)
 - [GalacticraftCapesApi.User](docs/User.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

### userAccessCode

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api.galacticraft.dev/auth
- **Scopes**: 
  - write: modify capes in your account
  - read: read your capes

