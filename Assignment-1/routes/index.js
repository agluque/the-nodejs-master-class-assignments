const {
  hello,
  methodNotAllowed,
  notFound
} = require('../handlers');

const routes = {
  'hello': {
      post: hello
  }
};

const handlerResolver = (path, method) => {
  const route = routes[path];
  return route ? route[method] || methodNotAllowed : notFound;
};

module.exports = ({path, method, ...data}, callback) => {
    const handler = handlerResolver(path, method);
    try {
        handler(data, callback);
    } catch(err) {
        callback(500);
    };
};
