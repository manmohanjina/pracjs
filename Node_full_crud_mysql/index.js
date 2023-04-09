const express = require("express");

const app = express();
app.use(express.json());
require("dotenv").config();
const { connect } = require("./db/db.js");
const { getRoute } = require("./routes/post.js");
const { registerRoute } = require("./routes/auth.js");
const { validation } = require("./middleware/authMiddleware.js");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/op", getRoute);
app.use("/auth", registerRoute);

app.get("/test", (req, res) => {
  console.log(req.body.userId);
  res.send("ok");
});

app.listen(Number(process.env.port), () => {
  connect();
});
