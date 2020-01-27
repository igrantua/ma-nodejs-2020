const axios = require('axios');

const axiosRetry = require('axios-retry');

const options = require('./options');

module.exports = async function main() {
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const option of options.optionsAxios) {
      axiosRetry(
        axios,
        { retries: 30 },
        {
          retryDelay: (retryCount) => {
            return retryCount * 2;
          },
        },
      );
      // eslint-disable-next-line no-await-in-loop
      const response = await axios(option);
      console.log(response.data);
    }
  } catch (err) {
    // console.log(err.message);
    console.log(err.response.data);
  }
};
