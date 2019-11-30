// const Counter = 10 ** 100;
let biggestPrime;
let num = 1;

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isBiggestPrime = () => {
  num += 1;
  if (isPrime(num)) {
    biggestPrime = num;
  }
};

const logPrime = () => {
  setInterval(isBiggestPrime, 1);
  setInterval(() => {
    const dateTime = new Date();
    console.log(`${dateTime} : -- IN PROCESS -- Biggest prime number found: ${biggestPrime}`);
  }, 1000);
};

logPrime();

// setInterval(isBiggestPrime, 1);
// setInterval(() => {
//   const dateTime = new Date();
//   console.log(`${dateTime}: -- IN PROCESS -- Biggest prime number found: ${biggestPrime}`);
// }, 1000);
