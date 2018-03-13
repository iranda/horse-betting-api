const apiRoute = require('./apis');
const errorController = require('../controllers/errors');

const init = (server) => {
  server.get('*', (req, res, next) => {
    console.log(`Request was made to: ${req.originalUrl}`);
    return next();
  });

  server.use('/api', apiRoute);
  server.use(errorController.defaultError);
};

module.exports = {
  init,
};
