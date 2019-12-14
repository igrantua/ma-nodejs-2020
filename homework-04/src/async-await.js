const waitFor = require('util').promisify(setTimeout);

const throwDice = () => {
  const diceRoll = Math.floor(Math.random() * 7);
  if (diceRoll === 0) {
    throw new Error('Lost dice');
  }
  return diceRoll;
};

const logDice = async () => {
  try {
    await waitFor(700);
    const firstDice = throwDice();
    console.log(`You got ${firstDice}`);

    await waitFor(1300);
    const secondDice = throwDice();
    console.log(`You got ${secondDice}`);

    setTimeout(() => console.log(`You got ${firstDice + secondDice} at all`), 1000);
  } catch (error) {
    console.log(error);
  }
};

logDice();
