var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
        var sql = "SELECT customers.name AS customer, products.name AS product FROM customers LEFT JOIN products ON customers.name = products.name";
        con.query(sql, function (err, result) {
        if (err) throw err;
    console.log(result);
    });
});