const { pool } = require("../db/db");

const handelGetRouter = async (req, res) => {
  try {
    const q = "SELECT * FROM posts";

    pool.query(q, (err, data) => {
      if (err) return res.send({ error: err });
      else {
        return res.status(200).send(data);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "error while fetching details /get " });
  }
};

const handelGetSingleRouter = (req, res) => {
  try {
   
    const { id } = req.params;
 
    const q =
      "SELECT  `titel`, `description`, img, `date`, `uid` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=? ";
pool.query(q, [req.params.id], (err,result)=>{
  if(err)return res.status(500).send({"error":"cannot fetch",err})
  return res.status(200).send(result)
})
    
  } catch (error) {
    return res.status(500).send({ error: "error while fetching", error });
  }
 
};

const handelAddPostRouter = (req, res) => {
  try {
  } catch (error) {}
};

const handelUpdatePostRouter = (req, res) => {
  try {
  } catch (error) {}
};

const handelDelPostRouter = (req, res) => {
  
  try {
   console.log(req.cookies.access_token)
    res.send('ok')
  } catch (error) {
   return res.status(500).send({"error":error})
  }
};

module.exports = {
  handelGetRouter,
  handelAddPostRouter,
  handelDelPostRouter,
  handelGetSingleRouter,
  handelUpdatePostRouter,
  handelUpdatePostRouter,
};
