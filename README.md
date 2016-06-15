# SendinBlue npm Library

This is [SendinBlue](https://www.sendinblue.com) provided API V2 npm library. It implements the various exposed APIs that you can read more about on https://apidocs.sendinblue.com.

SendinBlue API's use HTTP Authentication through an api key. You can create your api key from [API Console](https://my.sendinblue.com/advanced/apikey), after you sign up for an account with SendinBlue. You must use latest version 2.0, access key, for accessing APIs.


## Installation

``` npm install sendinblue-api --save ```


## Dependencies

This version of the library depends on Restler 3.2.2


## Usage

Assuming that you have installed this package, use below sample script to get started.

```javascript

	var sendinblue = require('../sendinblue-api');
	var sendinObj = new sendinblue('https://api.sendinblue.com/v2.0/', 'your_api_key', 5000);	//Optional parameter: Timeout in MS

	sendinObj.get_account().on('complete', function(data) {
		data = JSON.parse(data);
		console.log(data);
	});
```


## Release History

* 1.0.0 Initial release


## Support and Feedback

Be sure to visit the SendinBlue official [documentation website](https://apidocs.sendinblue.com) for additional information about our API.

If you find a bug, please submit the issue in [Github directly](https://github.com/mailin-api/api-node-js/issues). 

As always, if you need additional assistance, drop us a note [here](https://apidocs.sendinblue.com/support/).