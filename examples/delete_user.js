var sendinblue = require('../sendinblue-api');
var sendinObj = new sendinblue('https://api.sendinblue.com/v2.0/', 'your_api_key', 5000);

var input = { 'email': 'example@example.net' };

sendinObj.delete_user(input).on('complete', function(data) {
	data = JSON.parse(data);
	console.log(data);
});

/*
Output Response
{
	code: 'success',
	message: 'Email was removed successfully from all lists',
	data:[]
}
*/