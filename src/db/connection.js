const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: '0.0.0.0',
  port: 33060,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;