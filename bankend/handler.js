'use strict';

const GetBalance = require('./getbalance');

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getaccountbalance = async (event, context) => {
  var balance = await GetBalance.get_balance_for_user('test');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'You are fabolous! ' + balance ,
      input: event,
    }),
  };
};
