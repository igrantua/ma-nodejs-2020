const queryString = require('querystring');

const url = require('url');

const router = require('./router');

module.exports = async (request, response) => {
  try {
    const { url: uri } = request;
    const parsedUrl = url.parse(uri);
    const queryParams = queryString.decode(parsedUrl.query);
    let body = '';
    request
      .on('error', (err) => {
        console.log(err);
      })
      .on('data', (chunk) => {
        body += chunk;
      })
      .on('end', () => {
        try {
          if (body.length !== 0) {
            body = JSON.parse(body);
          }
        } catch (err) {
          console.log(err);
        }
        router({ ...request, body: body || {}, url: parsedUrl, queryParams }, response);
      });
  } catch (err) {
    console.log(err);
  }
};
