const pgClient = require('./pgClient');

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

async function createTablePg() {
  await pgClient.query(create).then(res => console.log(res));
}
async function insertUserPg() {
  await pgClient.query(insertUser).then(res => console.log(res));
}
async function updateUserPasswordPg() {
  await pgClient.query(updateUserPassword).then(res => console.log(res));
}
async function selectUserByIdPg() {
  await pgClient.query(selectUserById).then(res => console.log(res.rows));
}
async function deleteUserByIdPg() {
  await pgClient.query(deleteUserById).then(res => console.log(res));
}

(async () => {
  pgClient.connect();
  try {
    await createTablePg();
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await insertUserPg();
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await updateUserPasswordPg();
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await selectUserByIdPg();
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await deleteUserByIdPg();
  } catch (e) {
    console.error(e.stack);
  }
  pgClient.end();
})();
