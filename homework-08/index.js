const server = require('./src/app');

const reqHttp = require('./src/reqHttp');

const reqPrNative = require('./src/reqPrNative');

const reqAxios = require('./src/reqAxios');

const { CLIENT } = process.env;

const serverLog = () => {
  switch (CLIENT) {
    case 'HTTP':
      reqHttp();
      break;

    case 'RPN':
      reqPrNative();
      break;

    default:
      reqAxios();
      break;
  }
};

server();

setInterval(() => serverLog(), 10000);
