const request = require('request-promise-native');

const retry = require('async-retry');

const options = require('./options');

module.exports = async function main() {
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const option of options.optionsRPN) {
      // eslint-disable-next-line no-await-in-loop
      retry(
        async () => {
          const response = await request(option);
          console.log(response);
        },
        { retries: 30 },
        { minTimeout: 100 },
        { factor: 2 },
        { randomize: false },
      );
    }
  } catch (err) {
    console.log(err.response.body);
  }
};
