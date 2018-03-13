const config = {
  port: 3000,
  database: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    host: 'localhost',
    password: '',
  },
};

module.exports = config;
