
const { pool } = require("../db/db");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const handelRegisterUserController = (req, res) => {
  try {
    //validation
    const { username, email, img, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(301)
        .send({ error: "all fields are requested from '/register'" });
    }
    //checking for existing user;

    const q = "SELECT * FROM users WHERE email=? OR username=? ";
    const values = [email, username];
    pool.query(q, values, (err, result) => {
      if (err) {
        return res.send({ error: "having some issue", err });
      } else if (result.length > 0) {
        return res.status(301).send({ err: "user alredy exist plz login" });
      } else {
        //hashing the password and  creating the user;

        bcrypt.hash(password, 2, (err, hash) => {
          if (err)
            return res.status(300).send({ error: "error while hashing" });

          //saving the new user to database;

          const q =
            "INSERT INTO users (`username`, `email`,  `password`) VALUES (?)";
          const values = [username, email, hash];
          pool.query(q, [values], (err, result) => {
            if (err) {
              return res
                .status(301)
                .send({ error: "error while storing new user to db" });
            } else
              res.status(200).send({ success: "user registerd successfully" });
          });
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "error while registering user, /register" });
  }
};

//LOGIN ROUTER CONTROLLER;

const handelLoginUserController = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send({ error: "all feilds are mandatory '/login'" });
    }
    //checking if user is present in db or not';
    const q = "SELECT * FROM users WHERE email=? ";

    const values = [email];
    pool.query(q, [values], (err, data) => {
      if (err) return res.status(301).send({ error: "error please try again" });
      else if (data.length === 0) {
        return res.status(301).send({ error: "user not registerd" });
      } else {
        const pass = bcrypt.compareSync(password, data[0].password);

        if (!pass) {
          return res.status(300).send({ err: "wrong password" });
        } else {
          //creating a token to authenticate the user;

          var token = jwt.sign({ userId: data[0].id }, process.env.key);
          const { password, ...other } = data[0];
          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .send({ other, token});
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({ error: "error while login `/login`" });
  }
};

const handleLogoutUserController = (req, res) => {
  try {
    res
      .clearCookies("access_token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send({ succ: "user logged out" });
  } catch (error) {
    console.log(error);
    res.status(200).send({ error: "error while logout `/logout`" });
  }
};

module.exports = {
  handelRegisterUserController,
  handelLoginUserController,
  handleLogoutUserController,
};
