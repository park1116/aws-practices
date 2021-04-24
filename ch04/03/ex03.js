// EC2 인스턴스를 정지
var AWS = require('aws-sdk');

ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

var params = {
    InstanceIds: ['i-0b863c5fd4411f1d8'], // 필수
    DryRun: false,
    Force: false
};

ec2.stopInstances(params, function (err, data) {
    if (err)
        console.log(err, err.stack);
    else
        console.log(data);
});