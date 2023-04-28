const mysql = require("mysql2");
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER_NAME = process.env.MYSQL_USER_NAME;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME;

const database = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER_NAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB_NAME,
});

module.exports = database.promise();

