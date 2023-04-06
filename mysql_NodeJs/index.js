const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
const { connect, pool } = require("./db.js");

app.get("/", async (req, res) => {
  try {
    let data = pool.query("SELECT * FROM supes", (err, data) => {
      if (err) {
        res.send({ err: "cannot get data" });
      } else {
        console.log(data);
        res.send(data);
      }
    });

    //res.send("ok");
  } catch (error) {
    console.log(error);
    res.send({ err: "canot get" });
  }
});

app.patch("/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const values = [req.body.name, req.body?.wepon, req.body?.power, id];
    let q =
      "UPDATE supes SET `name`=?, OR`wepon`=? ,OR `power`= ? WHERE `id`=? ";
    pool.query(q, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.send("error while updateing");
      }

      res.send("updated");
    });
  } catch (error) {}
});

app.delete("/del/:id", (req, res) => {
  try {
    const { id } = req.params;
    const q = "DELETE FROM supes WHERE id=?";
    pool.query(q, [id], (err, result) => {
      if (err) {
        return res.send({ error: "error while deleting" });
      } else {
        return res.send({ succ: "deleted" });
      }
    });
  } catch (error) {}
});

app.post("/add", (req, res) => {
  const { name, wepon, power } = req.body;
  try {
    let q = "INSERT INTO supes (`name`,`wepon`,`power`) values(?,?,?)";
    const values = [name, wepon, power];

    pool.query(q, values, (err, data) => {
      if (err) {
        console.log(err);
        res.send("erorr while storing");
      } else {
        console.log(data);
        res.status(200).send(data);
      }
    });
  } catch (error) {
    console.log(error);
    res.send("err", error);
  }
});

app.listen(8080, () => {
  connect();
});
