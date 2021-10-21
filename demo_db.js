var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "world"
});
con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("Select * from city limit 10", function (err, result, fields) {
    console.log("here");
	if (err) throw err;
    console.log(result);
	console.log("here_2");
  });
});
