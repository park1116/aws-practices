#! /bin/bash
sudo yum install git -y
sudo curl --silent --location https://rpm.nodesource.com/setup_7.x|bash -
sudo yum -y install nodejs

git clone https://github.com/aws-bitacademy/myapp1.git
node myapp1/index.js &