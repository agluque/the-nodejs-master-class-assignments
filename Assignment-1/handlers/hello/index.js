/**
* Hello application logic.
* If the JSON payload is not correct, returns back a default message.
*/
module.exports = ({ payload }, callback) => {
  let jsonPayload;
  try {
    jsonPayload = JSON.parse(payload);
  } catch (err) {
    jsonPayload = {};
  }

  const name = jsonPayload.name || 'guest';
  callback(200, {
    'greeting': `Welcome ${name}!`
  });
};
