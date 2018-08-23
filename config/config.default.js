'use strict';

const {key} = require('./secure')

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + `_${key}`;

  // add your config here
  config.middleware = [];

  return config;
};
