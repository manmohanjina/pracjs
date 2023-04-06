const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "superhero",
});

const connect = () => {
  return pool.getConnection((err, result) => {
    if (err) return console.log("err cannot connect to db", err);
    else {
        console.log('server connected')
       
    }
    
  });
};

module.exports = {
  connect,pool
};
