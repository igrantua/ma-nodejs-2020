const { sum: addThreeNumbers } = require('./task');
const { planet: earth } = require('./task');
const { later } = require('./task');

const boot = async () => {
  console.log(addThreeNumbers(1, 2, 4));
  await later.then(console.log);
  console.log(earth.info());
};

boot();
