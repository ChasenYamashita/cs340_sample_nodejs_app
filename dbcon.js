var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_yamashch',
  password        : '0703',
  database        : 'cs340_yamashch'
});
module.exports.pool = pool;
