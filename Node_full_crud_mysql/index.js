const express = require("express");

const app = express();
app.use(express.json());
require("dotenv").config();
const { connect } = require("./db/db.js");
const { getRoute } = require("./routes/post.js");
const multer = require("multer");
const { registerRoute } = require("./routes/auth.js");
//const { validation } = require("./middleware/authMiddleware.js");

//we can use multer to upload img to server;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/op", getRoute);
app.use("/auth", registerRoute);

app.get("/test", (req, res) => {
  let x = req.cookies.access_token;
  console.log(x);
  res.send({ coook: x });
});

app.listen(Number(process.env.port), () => {
  connect();
});
