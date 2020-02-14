require('dotenv').config({ path: `../../.env_development` });

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DBHOST,
      port: process.env.DBPORT,
      database: process.env.DBNAME,
      user: process.env.DBUSER,
      password: process.env.DBPASSWD,
    },
    pool: {
      min: 1,
      max: 1,
    },
    debug: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations',
    },
  },
};
