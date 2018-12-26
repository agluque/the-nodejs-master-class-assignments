/**
* Handles the request parsing the requested URL,
* parsing the body payload and returning back the response to the user after
* routing to the proper request application handler.
*
*/
const { parse } = require('url');
const routes = require('./routes');
const { StringDecoder } = require('string_decoder');

module.exports = (req, res) => {
  const { url, method, headers } = req;
  const { pathname, query } = parse(url, true);

  const path = pathname.replace(/^\/+|\/+$/g, '');

  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    const data = {
      'path': path,
      'payload': buffer,
      'method': method.toLowerCase(),
      'query': query,
      'headers': headers
    };

    routes(data, (statusCode = 200, payload = {}) => {
      res.writeHead(statusCode, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify(payload));
    });
  });
};
