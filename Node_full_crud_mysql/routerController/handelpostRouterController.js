const { pool } = require("../db/db");
const jwt = require("jsonwebtoken");
const { validation } = require("../middleware/authMiddleware");
require("dotenv").config();

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
    pool.query(q, [req.params.id], (err, result) => {
      if (err) return res.status(500).send({ error: "cannot fetch", err });
      return res.status(200).send(result);
    });
  } catch (error) {
    return res.status(500).send({ error: "error while fetching", error });
  }
};


const handelAddPostRouter = (req, res) => {
  try {
    const q = "INSERT INTO posts (`titel`, `description`, `img`,`uid`) VALUES(?)";
  const {titel,description, img,}=req.body;
  console.log(req.body.userId,"userid")

    const values=[titel,description,img,req.body.userId]
    pool.query(q, [values], (err,result)=>{
      console.log(result);
      if(err)return res.status(401).send({"error":"cannot post",err})
      res.status(200).send({"succ":"post success"})
    })


  } catch (error) {
    res.status(401).send({ error: "canot post " });
  }
};

const handelUpdatePostRouter = (req, res) => {
  try {
  } catch (error) {}
};

const handelDelPostRouter = (req, res) => {
  try {
    //first we need to verify if token is present or not;

    const token = req.cookies.access_token;
   

    if (!token) return res.status(401).send({ error: "not authenticated" });
    //now we need to verify the token;
   
      //if every thing is alright then we have to take the id of the post which we need to del from db;
      const { id } = req.params;
     // console.log(id, req.body.userId)

      const getq="SELECT * FROM posts WHERE id=?"

      pool.query(getq, [id],(err,result)=>{
        if(err)return res.status(401).send({"err":"item no more availble in db",err})
       
        if(result.length===0)return res.send("not availble")
        else{
          const q = "DELETE FROM posts WHERE `id`=? AND `uid`=?";
  
          pool.query(q, [id, req.body.userId], (err, result) => {
            if (err) return res.status(401).send({ error: "you can only delete post genrated by you" });
    
            else return res.status(200).send({ succ: "post has been deleted successfully" });
         });
        }
   
      })

    
   
  } catch (error) {
    return res.status(500).send({ error: error });
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
