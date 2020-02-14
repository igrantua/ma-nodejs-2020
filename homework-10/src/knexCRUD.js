const knex = require('./knexClient');

const userOne = { login: 'brianc', password: 'brianmcarlsongmail', token: 'qwertyuqwertyu' };
const idOne = 1;
const passwordOne = 'uytrewquytrewq';

const insertUserKnex = user => {
  knex('usersKnex')
    .insert(user)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};

const updateUserPasswordKnex = (ID, newPassword) => {
  knex('usersKnex')
    .where({ id: ID })
    .update({ password: newPassword })
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};

const selectUserByIdKnex = ID => {
  knex('usersKnex')
    .where({ id: ID })
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};

const deleteUserByIdKnex = ID => {
  knex('usersKnex')
    .where({ id: ID })
    .del()
    .then(res => console.log(res))
    .catch(e => console.error(e.stack));
};

insertUserKnex(userOne);
updateUserPasswordKnex(idOne, passwordOne);
selectUserByIdKnex(idOne);
deleteUserByIdKnex(idOne);
