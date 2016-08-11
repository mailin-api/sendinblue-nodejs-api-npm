# SendinBlue npm Library

This is [SendinBlue](https://www.sendinblue.com) provided API V2 npm library. It implements the various exposed APIs that you can read more about on https://apidocs.sendinblue.com.

SendinBlue API's use HTTP Authentication through an api key. You can create your api key from [API Console](https://my.sendinblue.com/advanced/apikey), after you sign up for an account with SendinBlue. You must use latest version 2.0, access key, for accessing APIs.


## Install Package

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/).

Our npm package is available here https://www.npmjs.com/package/sendinblue-api

Add the following to your `package.json` file:

```json
{
  ...
  "dependencies": {
    ...
    "sendinblue-api": "^1.0.0"
  }
}
```

Install sendinblue-api and its dependencies:

```bash
npm install
```

### Alternative Installation

You can also install sendinblue-api locally with the following command:

```bash
npm install sendinblue-api
```


## Dependencies

This version of the library depends on Restler 3.2.2


## Usage

Assuming that you have installed this package, use below sample script to get started.

```javascript

	var sendinblue = require('sendinblue-api');

	var parameters = { "apiKey": "your_api_key", "timeout": 5000 };	//Optional parameter: Timeout in MS
	var sendinObj = new sendinblue(parameters);

	var input = {};
	sendinObj.get_account(input, function(err, response){
	     console.log(response);
	});
```


## Support and Feedback

Be sure to visit the SendinBlue official [documentation website](https://apidocs.sendinblue.com) for additional information about our API.

If you find a bug, please submit the issue in [Github directly](https://github.com/mailin-api/sendinblue-nodejs-api-npm/issues). 

As always, if you need additional assistance, drop us a note [here](https://apidocs.sendinblue.com/support/).