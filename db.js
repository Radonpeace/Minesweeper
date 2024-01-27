const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'radon',
  password: 'Ssai@12345',
  database: 'radon',
  connectionLimit: 10, // Adjust as needed
});

module.exports = pool;