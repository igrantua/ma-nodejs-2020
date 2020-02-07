/* eslint-disable no-underscore-dangle */
const { Transform } = require('stream');
const config = require('../config');

module.exports = class LimitTransform extends Transform {
  constructor() {
    super();
    this.length = 0;
    this.rate = config.rate > config.minRate ? config.rate : config.minRate;
  }

  _transform(chunk, _encoding, next) {
    const timeout = 1000 / (this.rate / chunk.length);
    setTimeout(() => {
      this.push(chunk);
      next();
    }, timeout);
    this.length += chunk.length;
    if (this.length === 1024 * 1024) {
      process.stdout.write('.');
      this.length = 0;
    }
  }
};
