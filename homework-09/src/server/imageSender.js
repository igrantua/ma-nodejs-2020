const fs = require('fs');
const { pipeline } = require('stream');
const config = require('../config');
const Limiter = require('./limiter');

function sendJPEG(res) {
  const readStr = fs.createReadStream(config.filePath);
  const transStr = new Limiter();

  pipeline(readStr, transStr, res, err => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  });
}

module.exports = {
  sendJPEG,
};
