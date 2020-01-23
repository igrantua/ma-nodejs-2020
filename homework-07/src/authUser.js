const user = {
  name: 'igrantua',
  pass: 'Test12345',
};

const data = `${user.name}:${user.pass}`;
const base64data = Buffer.from(data).toString('base64');
const userData = `Basic ${base64data}`;

module.exports = (req) => req === userData;
