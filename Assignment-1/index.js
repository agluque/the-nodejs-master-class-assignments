/**
* Main application file.
* Create a HTTP server listing in a specific port.
* Load environment specific configuration.
* Import and makes uses of the application logic.
*/
const { createServer } = require('http');
const { port, envName } = require('./config');
const app = require('./app');

createServer(app).listen(port, () => console.log(`Server up and running on port ${port} for environment ${envName}`));
