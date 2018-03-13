const express = require('express');
const routes = require('./routes');
const config = require('./configs');

const server = express();

routes.init(server);

server.listen(config.port, () => {
  console.log(`Express server listening on port ${config.port}`);
});
