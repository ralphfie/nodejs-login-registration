const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : '127.0.0.1', // MYSQL HOST NAME
    user     : 'root', // MYSQL USERNAME
    password : 'PP0015', // MYSQL PASSWORD
    database : 'nodejs_login', // MYSQL DB NAME
    port     : '3307'
}).promise();
module.exports = dbConnection;