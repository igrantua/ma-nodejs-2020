const http = require('http');

const port = 3000;

const requestHandler = require('./src/requestHandler');

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is listening on ${port}`);
});
