const { createServer } = require('http');
const { port, envName } = require('./config');
const app = require('./app');

createServer(app).listen(port, () => console.log(`Server up and running on port ${port} for environment ${envName}`));
