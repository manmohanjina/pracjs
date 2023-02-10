const { errorMonitor } = require("events");
const { json } = require("express");
const express = require("express");
const app = express();
app.use(express.json());
const { mw } = require("./midlleware");

const { postData } = require("./postRoute");

const fs = require("fs");

// app.use(mw)
app.get("/getdata", (req, res) => {
  let sum=0;
  for(let i=0;i<500;i++){
    sum+=i
  }
  let data = fs.readFileSync("./text.json", "utf-8",(err,tes)=>{
     
    console.log(tes)
  });
   
 
  console.log(sum)
  res.send(data);
  
});

app.use("/", postData);

app.delete("/deletedata/:id", (req, res) => {
  const ID = Number(req.params.id);

  let data = fs.readFileSync("./text.json", "utf-8");
  data = JSON.parse(data);

  data.data = data.data.filter((elm) => elm.id != ID);

  fs.writeFileSync("./text.json", JSON.stringify(data));

  res.send("ok");
});

app.put("/change/:id", (req, res) => {
  const ID = Number(req.params.id);
  const {name,id,age,height} = req.body;

  let obj={
    name:name,
    id:id,
    age:age,
    height:height
  }
  console.log(name,"namee")

  let data = fs.readFileSync("./text.json", "utf-8");
  data = JSON.parse(data);

  data.data = data.data.map((elm) => {
    // if(elm.id===ID){
    //     return elm=obj
    // }
    // else{
    //     return elm
    // }
  
    return elm.id===ID?elm=obj:elm
  });

  fs.writeFileSync("./text.json",JSON.stringify(data))
  res.send('ok')
});






app.listen(8080, () => {
  try {
    console.log("server standby at 8080");
  } catch (error) {
    console.log(error);
  }
});
