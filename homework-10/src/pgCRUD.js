const pgClient = require('./pgClient');

pgClient.connect();

const create = `CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "login" VARCHAR (50) UNIQUE NOT NULL,
  "password" VARCHAR (50) NOT NULL,
  "token" VARCHAR (50) UNIQUE NOT NULL)`;

const insertUser = {
  text: 'INSERT INTO users(login, password, token) VALUES($1, $2, $3)',
  values: ['brianc', 'brianmcarlsongmail', 'qwertyuqwertyu'],
};

const selectUserById = {
  text: 'SELECT * FROM users WHERE id = $1',
  values: [1],
};

const updateUserPassword = {
  text: `UPDATE users SET password = $1 WHERE id = $2`,
  values: ['ytrewqytrewq', 1],
};

const deleteUserById = {
  text: 'DELETE FROM users WHERE id = $1',
  values: [1],
};

const createTablePg = () => {
  pgClient
    .query(create)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};
const insertUserPg = () => {
  pgClient
    .query(insertUser)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};
const updateUserPasswordPg = () => {
  pgClient
    .query(updateUserPassword)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};
const selectUserByIdPg = () => {
  pgClient
    .query(selectUserById)
    .then(res => console.log(res.rows))
    .catch(e => console.error(e.stack));
};
const deleteUserByIdPg = () => {
  pgClient
    .query(deleteUserById)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};

createTablePg();
insertUserPg();
updateUserPasswordPg();
selectUserByIdPg();
deleteUserByIdPg();
