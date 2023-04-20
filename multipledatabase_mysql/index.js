const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
const folderpath = "./files";
app.use(express.json());

app.get("/", (req, res) => {
  let len = fs.readdirSync(folderpath);

  const { text } = req.body;

  console.log(text);

  len.forEach((elm, i) => {
    //console.log(elm);

    const data = fs.readFileSync(`./files/${elm}`, "utf-8");

    let arrdata = data.split(" ");

    let new_data = arrdata.filter((word) => word === text);
    if (new_data.length == 0) {

     
    }
     
     
     
    //   fs.appendFileSync("myfile.txt",JSON.stringify({ "data":new_data[0] ,"pageno":(i+1).toString()}), (err) => {
    //     if (err) throw err;
    //     console.log("File created!");
    //   });
    
    //
  });
  res.send("ok")
});

// fs.readFile('path/to/book.txt', 'utf8', (err, data) => {
//     if (err) throw err;
    
//     const words = data.split(/\s+/); // split the book contents into an array of words
//     const wordsCount = {}; // an object to store the word count
    
//     // loop through the words and count them
//     for (let i = 0; i < words.length; i++) {
//       const word = words[i].toLowerCase().replace(/[^a-zA-Z]/g, ''); // convert to lowercase and remove non-alphabetic characters
//       if (!word) continue; // skip empty words
//       if (!wordsCount[word]) wordsCount[word] = { count: 0, pages: [] }; // initialize the word count and page array
//       wordsCount[word].count++; // increment the word count
//       wordsCount[word].pages.push(Math.floor(i/300)+1); // add the page number (assuming 300 words per page)
//     }
  
//     // log the word count and page numbers
//     for (const word in wordsCount) {
//       console.log(`${word}: ${wordsCount[word].count} (${wordsCount[word].pages.join(', ')})`);
//     }
//   });

app.listen(8080, () => {
  console.log("server running at port 8080");
});
