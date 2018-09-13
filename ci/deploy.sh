#!/bin/bash

#install serverless.com
npm install

cd bankend

#install service dependencies
npm install

#actual service deployment, with all it's functions
../node_modules/serverless/bin/serverless deploy -v

