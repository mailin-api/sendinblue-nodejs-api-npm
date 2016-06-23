var sendinblue = require('../sendinblue-api');
var sendinObj = new sendinblue('https://api.sendinblue.com/v2.0/', 'your_api_key', 5000);

var input = { 'email': 'example@example.net',
    'attributes': {
        'NAME': 'example',
        'SURNAME': 'example'
    },
    'blacklisted': 0,
    'listid': [291]
};

sendinObj.create_update_user(input, function(err, response){
    console.log(response);
});

/*
Output Response
{
	code: 'success',
	message: 'Email was updated successfully. ',
	data: { id: 5, updated: 'true' }
}
*/