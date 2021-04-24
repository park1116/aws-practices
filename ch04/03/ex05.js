// EC2 인스턴스 정보
var AWS = require('aws-sdk');

ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

var params = {
    Filters: [{
        Name: 'availability-zone',
        Values: ['ap-northeast-2c']
    }],
    InstanceIds: ['i-0b863c5fd4411f1d8']
};

ec2.describeInstances(params, function (err, data) {
    if (err)
        console.log(err, err.stack);
    else
        console.log(data);
});