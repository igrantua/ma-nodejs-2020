require('dotenv').config({ path: `.env_development` });
const client = require('./knexfile').development;

const knexCl = client;

const pgCl = client.connection;

module.exports = { pgCl, knexCl };
