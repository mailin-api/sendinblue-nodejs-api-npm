var sendinblue = require('../sendinblue-api');
var sendinObj = new sendinblue('https://api.sendinblue.com/v2.0/', 'your_api_key', 5000);

var input =	{ 'to': { 'to@example.net': 'to whom!' },
	'from': ['from@email.com', 'from email!'],
	'subject': 'Test mail form sendinblue',
	'html': 'This is the <h1>HTML</h1>'
};

sendinObj.send_email(input).on('complete', function(data) {
	data = JSON.parse(data);
	console.log(data);
});

/*
Output Response

{
	code: 'success',
	message: 'Email sent successfully.',
	data:[]
}
*/