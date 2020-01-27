const user = {
  name: 'igrantua',
  pass: 'Test12345',
};

const userData = `Basic ${Buffer.from(`${user.name}:${user.pass}`).toString('base64')}`;

const authUser = (req) => req === userData;

module.exports = { userData, authUser };
