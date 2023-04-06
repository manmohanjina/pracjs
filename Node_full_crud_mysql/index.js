const express = require("express");

const app = express();
app.use(express.json());
require("dotenv").config();
const { connect } = require("./db/db.js");
const { getRoute } = require("./routes/post.js");
const { registerRoute } = require("./routes/auth.js");



app.use("/" , getRoute)
app.use('/auth',registerRoute)

app.listen(Number(process.env.port), () => {
  connect();
});
