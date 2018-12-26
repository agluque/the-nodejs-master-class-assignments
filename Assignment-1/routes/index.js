const handlers = require('../handlers');

const routes = {
  'hello': {
      post: handlers.hello
  }
};

const handlerResolver = (path, method) => {
  const route = routes[path];
  return route ? route[method] || handlers.methodNotAllowed : handlers.notFound;
};

module.exports = ({path, method, ...data}, callback) => {
    const handler = handlerResolver(path, method);
    try {
        handler(data, callback);
    } catch(err) {
        callback(500);
    };
};
