// load AWS SDK
const AWS = require('aws-sdk');

// create EC2 service object
const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

// get the current Amazon Linux 2 AMIs
const params = {
    Filters: [{
        Name: 'name',
        Values: ['amzn2-ami-hvm-2.0.????????-x86_64-gp2']
    }, {
        Name: 'state',
        Values: ['available']
    }],
    Owners: ['amazon']
};

ec2.describeImages(params, function (err, data) {
    if (err) {                      // an error occurred
        console.log(err, err.stack);
    } else {                        // successful response
        console.log(data);
    }
});