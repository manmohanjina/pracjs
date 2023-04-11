const jwt = require("jsonwebtoken");

require("dotenv").config();

const validation = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (token) {
      const decode = jwt.verify(token, process.env.key);

      //console.log(decode);

      //passing the userid in body who is making the req and using it later for comapring that the user who is making the req to update is the same user who has created it ;
      
      req.body.userId = decode.userId;

      next();
    }
    else{
      return res.status(500).send({"error":"login again /mw"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "error in mw", error });
  }
};

module.exports = {
  validation,
};
