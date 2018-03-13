const env = process.env.NODE_ENV || 'dev';
const envConfig = require(`./${env}`); // eslint-disable-line import/no-dynamic-require
const defaultConfig = {
  env,
};

module.exports = Object.assign(defaultConfig, envConfig);
