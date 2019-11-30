const later = (time, text) => new Promise((resolve) => setTimeout(resolve, time, text));

module.exports = later(2000, 'Hello!');
