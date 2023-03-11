let str = "acBDb";

//if str is in lower case minus the index else + the index value print the final result ;


let lower = "abcdefghijklmnopqrstuvwxyz";
let upper=lower.toUpperCase()
 

 let sum=0
for(let i=0;i<str.length;i++){
    for(let j=0;j<lower.length;j++){
        if(str[i]===lower[j]){
             sum+=(j+1)
        }
        else if(str[i]===upper[j]){
            sum-=j+1
        }
    }
}
console.log(sum)
