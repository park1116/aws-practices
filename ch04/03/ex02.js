// EC2 인스턴스 생성
var AWS = require('aws-sdk');

ec2 = new AWS.EC2({
    region: 'ap-northeast-2',
    apiVersion: '2016-11-15'
});

var params = {
    ImageId: 'ami-018a9a930060d38aa',  // 필수
    MaxCount: 1,  // 필수
    MinCount: 1,  // 필수
    Monitoring: { // 필수
        Enabled: false
    },
    DryRun: false,
    InstanceType: 't2.micro',
    KeyName: 'mykey'
};

ec2.runInstances(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
        return;
    }

    console.log(data);
});