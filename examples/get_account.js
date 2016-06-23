var sendinblue = require('../sendinblue-api');
var sendinObj = new sendinblue('https://api.sendinblue.com/v2.0', 'your_api_key', 5000);

var input = {};
sendinObj.get_account(input, function(err, response){
     console.log(response);
});

/*
Output Response
{
    code: 'success',
    message: 'Data retrieved',
    data: [{
            plan_type: 'PAG',
            credits: 407,
            credit_type: 'Send Limit'
        }, {
            plan_type: 'SMS',
            credits: 64,
            credit_type: 'Send Limit'
        }, {
            first_name: 'Lorem',
            last_name: 'Domer',
            email: 'lorem@ipsum.com',
            company: null,
            address: 'D-247/32',
            city: 'Los Angeles',
            zip_code: '90001',
            country: 'United States'
        }]
    }

*/