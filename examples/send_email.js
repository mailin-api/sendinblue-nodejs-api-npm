var sendinblue = require('sendinblue-api');

var parameters = { "apiKey": "your_api_key", "timeout": 5000 };
var sendinObj = new sendinblue(parameters);

var input =	{ 'to': { 'to@example.net': 'to whom!' },
	'from': ['from@email.com', 'from email!'],
	'subject': 'Test mail form sendinblue',
	'html': 'This is the <h1>HTML</h1>'
};

sendinObj.send_email(input, function(err, response){
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
	message: 'Email sent successfully.',
	data:{
		"message-id":"<201607300811.57188159183@smtp-relay.sendinblue.com>"
	}
}
*/