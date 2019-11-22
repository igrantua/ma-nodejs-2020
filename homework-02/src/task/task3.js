const later = function wait(time, text) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time, text);
  });
};

module.exports = later(2000, 'Hello!');
