var con = require('./demo_db');

//con.connect(function(err) {
  //if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM departments", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
