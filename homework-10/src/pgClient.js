const { Client } = require('pg');
const dbOptions = require('./config/config').pgCl;

module.exports = new Client(dbOptions);
