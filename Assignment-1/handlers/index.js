const hello = require('./hello');

module.exports = {
  notFound: (_, callback) => {
    callback(404);
  },
  methodNotAllowed: (_, callback) => {
    callback(405);
  },
  hello: hello
};
