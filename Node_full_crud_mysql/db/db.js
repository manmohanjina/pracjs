const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  password: "",
  user: "root",
  database: "blog",
});

const connect = () => {
  pool.getConnection((err, result) => {
    if (err) {
      return console.log("error while connnecting to DB");
    } else {
      console.log("successfully connected to ", result.threadId);
    }
  });
};

module.exports = {
  connect,
  pool,
};
