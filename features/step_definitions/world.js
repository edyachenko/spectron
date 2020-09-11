let { setWorldConstructor } = require('cucumber');
let { RPWorld } = require('@reportportal/agent-js-cucumber');
setWorldConstructor(RPWorld);