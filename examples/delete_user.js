var sendinblue = require('sendinblue-api');

var parameters = { "apiKey": "your_api_key", "timeout": 5000 };
var sendinObj = new sendinblue(parameters);

var input = { 'email': 'example@example.net' };

sendinObj.delete_user(input, function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});

/*
Output Response
{
	code: 'success',
	message: 'Email was removed successfully from all lists',
	data:[]
}
*/