var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'hackbbva'
});

module.exports=connection;