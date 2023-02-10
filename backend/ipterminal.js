
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,

  output: process.stdout,
});

rl.question("ip two no ", (ans) => {
    ans=ans.split(' ').map(Number)
    console.log(ans)
    let x=ans[0]
    let y=ans[1]
    let sum=x+y
    console.log(sum)
    rl.close()
    
});



