const { createRPFormatterClass } = require('@reportportal/agent-js-cucumber');

const config = require('./rpConfig.json');
config.token = process.env.REPORT_PORTAL_TOKEN
config.endpoint = process.env.RP_ENDPOINT
config.launch = process.env.RP_LAUNCH
config.project = process.env.RP_PROJECT
console.log(config)

module.exports = createRPFormatterClass(config)