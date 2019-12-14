// const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const throwDice = (waitFor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const diceRoll = Math.floor(Math.random() * 7);
      if (diceRoll === 0) {
        reject(Error(`Lost dice`));
      } else {
        resolve(diceRoll);
      }
    }, waitFor);
  });
};

const logDice = () => {
  let diceOne;
  let diceTwo;
  throwDice(700)
    .then((firstDice) => {
      console.log(`You got ${firstDice}`);
      diceOne = firstDice;
      return throwDice(1300);
    })
    .then((secondDice) => {
      console.log(`You got ${secondDice}`);
      diceTwo = secondDice;
    })
    .then(() => {
      setTimeout(() => console.log(`You got ${diceOne + diceTwo} at all`), 1000);
    })
    .catch((e) => {
      console.error(e);
    });
};

logDice();
