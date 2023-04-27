const express = require("express");
const app = express();
app.use(express.json());
const { connection, pool } = require("./db");

const jwt = require("jsonwebtoken");

app.post("/register", (req, res) => {
  try {
    const { email, password } = req.body;
    const token = jwt.sign({ email:`${email}` }, "js");
    console.log(token);

    const q = "INSERT INTO registration (`email`, `password`,`uni_token_tenant`) VALUES (?) ";
    const values=[email,password,token]

    pool.query(q, [values], (err,result)=>{
      if(err) res.status(400).send({'error':"cannot register user"})
      else {
        let count=0;
        
        const q=`CREATE DATABASE  tenant_${count}`
        count++
        pool.query(q,(err,result)=>{
          if(err)console.log('cannot create database with',err)
          else {
            res.status(200).send('user registed successfully db created')
          }
        });
      }
    })


  } catch (error) {
    console.log(error)
    res.status(500).send({'error':error})
  }
});

app.listen(8080, () => {
  connection();
});
