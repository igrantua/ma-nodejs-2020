const knex = require('./knexClient');

const userOne = { login: 'brianc', password: 'brianmcarlsongmail', token: 'qwertyuqwertyu' };
const loginOne = 'brianc';
const idOne = 1;
const passwordOne = 'uytrewquytrewq';

async function insertUserKnex(user) {
  await knex('usersKnex')
    .insert(user)
    .then(res => console.log(res));
}

async function updateUserPasswordKnex(ID, newPassword) {
  await knex('usersKnex')
    .where({ id: ID })
    .update({ password: newPassword })
    .then(res => console.log(res));
}

async function selectUserByLoginKnex(selectLogin) {
  await knex('usersKnex')
    .where({ login: selectLogin })
    .then(res => console.log(res));
}

async function deleteUserByIdKnex(ID) {
  await knex('usersKnex')
    .where({ id: ID })
    .del()
    .then(res => console.log(res));
}

(async () => {
  try {
    await insertUserKnex(userOne);
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await updateUserPasswordKnex(idOne, passwordOne);
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await selectUserByLoginKnex(loginOne);
  } catch (e) {
    console.error(e.stack);
  }
  try {
    await deleteUserByIdKnex(idOne);
  } catch (e) {
    console.error(e.stack);
  }
  knex.destroy();
})();
