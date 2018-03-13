const defaultError = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err.stack);
  res.status(500).send({ error: 'Internal Error 500' });
};

module.exports = {
  defaultError,
};
