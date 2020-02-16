const knex = require('./knexClient');

const userOne = { login: 'brianc', password: 'brianmcarlsongmail', token: 'qwertyuqwertyu' };
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

async function selectUserByIdKnex(ID) {
  await knex('usersKnex')
    .where({ id: ID })
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
    await selectUserByIdKnex(idOne);
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
