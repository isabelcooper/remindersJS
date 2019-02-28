const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD
};
