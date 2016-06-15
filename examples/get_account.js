var sendinblue = require('../sendinblue-api');
var sendinObj = new sendinblue('https://api.sendinblue.com/v2.0/', 'xnZCHqGbBVTXRjU0', 5000);

sendinObj.get_account().on('complete', function(data) {
    data = JSON.parse(data);
    console.log(data);
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