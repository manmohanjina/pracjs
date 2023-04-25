
const express = require("express");
const app = express();
const fs = require("fs");
const folderpath = "./files";
app.use(express.json());

app.get("/", (req, res) => {
  let len = fs.readdirSync(folderpath);
  let ans_arr = [];
  const { text } = req.body;

  //console.log(text);

  len.forEach((elm, i) => {
    //console.log(elm);

    const data = fs.readFileSync(`./files/${elm}`, "utf-8");

    let arrdata = data.split(" ");

    let new_data = arrdata.filter((word) => word === text);

    if(new_data[0]!==undefined){
      ans_arr.push(new_data[0], i + 1);
    }

    //  

    //
  });
//console.log(ans_arr)

let check=[]
check.push(ans_arr[0])
ans_arr.filter((elm)=>{
  if(!isNaN(elm)){
    check.push(elm)
  }
})
console.log(check)
fs.appendFileSync("myfile.txt", (`${check}:\t\n`), (err) => {
      if (err) throw err;
      console.log("File created!");
    });

  res.send("ok");
});



app.listen(8080, () => {
  console.log("server running at port 8080");
});
