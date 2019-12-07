const throwDice = (callback) => {
  const diceRoll = Math.floor(Math.random() * 7);
  if (diceRoll === 0) {
    return callback(new Error('Lost dice'));
  }
  return callback(null, diceRoll);
};

const logDice = () => {
  setTimeout(() => {
    throwDice((errorFirstDice, firstDice) => {
      if (errorFirstDice) {
        console.log(errorFirstDice);
      } else {
        console.log(`You got ${firstDice}`);
        setTimeout(() => {
          throwDice((errorSecondDice, secondDice) => {
            if (errorSecondDice) {
              console.log(errorSecondDice);
            } else {
              console.log(`You got ${secondDice}`);
              setTimeout(() => {
                console.log(`You got ${firstDice + secondDice} at all`);
              }, 1000);
            }
          });
        }, 1300);
      }
    });
  }, 700);
};

logDice();
