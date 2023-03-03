const express = require("express");
const { main } = require("./db/db");
const { middlewareValidator } = require("./middleware/mw");
const { AuthModel } = require("./model/authmodel");
require("dotenv").config();
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());


app.use(middlewareValidator);
app.post("/login", async (req, res) => {
  try {
    const token = jwt.sign({ course: "backend" },'masai');

    const { email, password } = req.body;
    const isUserpresent = await AuthModel.find({
      email: email,
      password: password,
    });

    if (isUserpresent.length == 0) {
        console.log(token,'tok')
      res.send({ err: "no user found" });
    } else {
      res.send(isUserpresent);
    }
  } catch (error) {
    console.log(error);
    res.send("err");
  }
});


app.post("/userauth", async (req, res) => {
  try {
    const payload = req.body;

    const signup = await new AuthModel(payload);
    signup.save();
    res.send({ msg: "registering user success" });
  } catch (error) {
    console.log("error occured while sign-Up");
  }
});

app.listen(process.env.port, () => {
  main();
});
