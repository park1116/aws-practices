#! /bin/bash
sudo yum install git -y
sudo curl --silent --location https://rpm.nodesource.com/setup_7.x|bash -
sudo yum -y install nodejs

git clone https://github.com/park1116/aws-practices.git
node aws-practices/myapp/index.js &