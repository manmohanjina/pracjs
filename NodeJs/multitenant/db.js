const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "common_db",
});

const connection = () => {
  pool.getConnection((err, result) => {
    if (err) console.log("error while connection to db", err);
    else {
     
      console.log("connection successfull to db", result.threadId);
    }
  });
};

module.exports = {
  pool,
  connection,
};
