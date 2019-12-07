const throwDice = () => {
  const diceRoll = Math.floor(Math.random() * 7);
  if (diceRoll === 0) {
    throw new Error('Lost dice');
  }
  return diceRoll;
};

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const logDice = async () => {
  try {
    await waitFor(700);
    const firstDice = await throwDice();
    console.log(`You got ${firstDice}`);

    await waitFor(1300);
    const secondDice = await throwDice();
    console.log(`You got ${secondDice}`);

    await waitFor(1000);
    console.log(`You got ${firstDice + secondDice} at all`);
  } catch (error) {
    console.log(error);
  }
};

logDice();
