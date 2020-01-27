const http = require('http');

const retry = require('async-retry');

const options = require('./options');

const postData = JSON.stringify({ limit: '1000' });

function httpRequest(opt) {
  return new Promise((resolve, reject) => {
    const req = http.request(opt, (res) => {
      let rawData = '';

      res.on('data', (chunk) => {
        rawData += chunk;
      });

      res.on('end', () => {
        res.data = rawData;
        resolve(res);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });
    if (opt.method === 'POST') {
      req.write(postData);
    }
    req.end();
  });
}

module.exports = async function main() {
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const option of options.optionsHTTP) {
      // eslint-disable-next-line no-await-in-loop
      retry(
        async () => {
          const response = await httpRequest(option);
          console.log(response.data);
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
