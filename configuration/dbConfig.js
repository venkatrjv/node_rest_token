var mysql = require('mysql');
// ────────────────────────────────────────────────────── MYSQL CONFIGURATION ─────
var connection = mysql.createPool({
    host: 'IP',
    user: '',
    password: '',
    database: ''
});

module.exports = connection;