const authUser = require('./authUser');

const auth = authUser.userData;

const optionsAxios = [
  {
    method: 'POST',
    url: 'http://127.0.0.1:3000/limit',
    data: { limit: '1000' },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    method: 'GET',
    url: 'http://127.0.0.1:3000/metrics',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/metrics?filter=total',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/metrics?filter=free',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/metrics?filter=allocated',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    method: 'GET',
    url: 'http://127.0.0.1:3000/test',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
];

const optionsRPN = [
  {
    method: 'POST',
    url: 'http://127.0.0.1:3000/limit',
    body: { limit: '1000' },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
    json: true,
  },
  {
    method: 'GET',
    url: 'http://127.0.0.1:3000/metrics',
    body: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
    json: true,
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/metrics?filter=total',
    body: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
    json: true,
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/metrics?filter=free',
    body: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
    json: true,
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/metrics?filter=allocated',
    body: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
    json: true,
  },
  {
    method: 'GET',
    url: 'http://localhost:3000/test',
    body: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
    json: true,
  },
];

const optionsHTTP = [
  {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/limit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/metrics',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/metrics?filter=total',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/metrics?filter=free',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/metrics?filter=allocated',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
  {
    hostname: '127.0.0.1',
    port: '3000',
    path: '/test',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${auth}`,
    },
  },
];

module.exports = { optionsAxios, optionsRPN, optionsHTTP };
