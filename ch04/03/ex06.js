// load the SDK for JavaScript
const AWS = require('aws-sdk');

// create an ec2 object
const ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

// setup params
const params = {
    InstanceIds: ['i-0b863c5fd4411f1d8']
};

ec2.terminateInstances(params, function (err, data) {
    if (err) {
        console.log(err, err.stack); // an error occurred
    } else {
        console.log(data);           // successful response
    }
});