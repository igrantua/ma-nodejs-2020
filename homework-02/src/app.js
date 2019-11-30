const { sum: addThreeNumbers, planet: earth, later } = require('./task');

const boot = async () => {
  console.log(addThreeNumbers(1, 2, 4));
  // await later.then(console.log);
  try {
    const result = await later;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log(earth.info());
};

boot();
