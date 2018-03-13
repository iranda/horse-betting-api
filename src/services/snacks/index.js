const db = require('../../db');

function get(req, res, next) {
  res.json(db);
}

module.exports = {
  get,
};
