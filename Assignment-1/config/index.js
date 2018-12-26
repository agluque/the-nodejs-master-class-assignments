/**
* Exports the correct application environment configuration.
*
*/
const environments = {};

environments.dev = {
  port: 5000,
  envName: 'development'
};

environments.prod = {
  port: 3000,
  envName: 'production'
};

const env = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV : '';

const envToExport = typeof(environments[env]) == 'object' ? environments[env] : environments.prod;

module.exports = envToExport;
