const Knex = require('knex');

const dbOptions = require('./config/config').knexCl;

module.exports = new Knex(dbOptions);
