exports.up = knex => {
  return knex.schema.createTable('usersKnex', table => {
    table.increments('id').primary();
    table.string('login', 50).notNullable();
    table.string('password', 50).notNullable();
    table.string('token', 50).notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('usersKnex');
};

exports.config = { transaction: false };
