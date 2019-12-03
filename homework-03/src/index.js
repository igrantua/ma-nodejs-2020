let biggestPrime;
let num = 999999999;

const isPrime = (number) => {
  const sqrt = Math.sqrt(number);
  if (number <= 1) return false;
  if (number === 2 || number === 3) return true;
  if (number % 2 === 0) return false;
  if (number % sqrt === 0) return false;
  for (let i = 3, root = sqrt; i <= root; i += 2) {
    if (number % i === 0) return false;
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
    // console.log(`${dateTime} : -- IN PROCESS -- Biggest prime number found: ${biggestPrime}`);
    console.log(
      `${dateTime.getTime()} : -- IN PROCESS -- Biggest prime number found: ${biggestPrime}`,
    );
  }, 1000);
};

logPrime();


// setInterval(isBiggestPrime, 1);
// setInterval(() => {
//   const dateTime = new Date();
//   console.log(`${dateTime}: -- IN PROCESS -- Biggest prime number found: ${biggestPrime}`);
// }, 1000);
// eslint-disable-next-line consistent-return
// const isPrime = (number) => {
//   const prime = new Array(Length).fill(true);
//   for (let i = 2; i <= Math.sqrt(Length); i += 1) {
//     if (prime[i]) {
//       for (let j = 2; j <= i * i; j += 1) {
//         prime[j] = false;
//       }
//     }
//     if (prime[number]) {
//       return true;
//     }
//   }
// };

// const isPrime = (number) => {
//   for (let i = 2; i <= Math.sqrt(number); i += 1) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const isPrime = (number) => {
//   let flag = true;
//   for (let i = 2; i <= Math.sqrt(number); i += 1)
//     if (number % i === 0) {
//       flag = false;
//       break;
//     }
//   if (flag === true) {
//     return true;
//   }
//   return false;
// };
