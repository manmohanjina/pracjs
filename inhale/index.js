const express = require("express");
const { main } = require("./db/db");
const { middlewareValidator } = require("./middleware/mw");
const { AuthModel } = require("./model/authmodel");
require("dotenv").config();
const app = express();
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
const { Authenticate } = require("./middleware/authenticateMW");
app.use(express.json());

//protected route via jwt
// app.use(Authenticate);
app.get("/", (req, res) => {
  // const token =req.headers.authorization

  //   jwt.verify(token, "masai", (err, decode) => {
  //     if (err) {
  //       console.log(err);
  //       res.send({ err: "invalid token" });
  //     } else {

  //      res.send('...data')
  //     }

  //   });
  res.send("ok");
});

app.use(middlewareValidator);
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserpresent = await AuthModel.find({
      email: email,
      password: password,
    });

    if (isUserpresent.length == 0) {
      res.send({ err: "no user found" });
    } else {
      const token = jwt.sign({ course: "backend" }, "masai");
      res.send({ succ: token });
    }
  } catch (error) {
    console.log(error);
    res.send("err");
  }
});

app.post("/userauth", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedpass=bcrypt.hash(password,8,async(err,hashed)=>{
      if(err){
        console.log(err)
        res.send({'msg':"tech issue"})
      }
      else{
        const signup = await new AuthModel({email, password:hashed});
        await signup.save();
        res.send({ msg: "registering user success" });
      }
    })

    
  } catch (error) {
    console.log("error occured while sign-Up");
  }
});

app.listen(process.env.port, () => {
  main();
});
