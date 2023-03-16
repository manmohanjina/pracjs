 
 function rev(num){
    const isNegative=num<0;
    console.log(isNegative,"is");

     let str= Math.abs(num).toString().split("")
     let rverse=str.reverse().join("")


    
    let number=Number(rverse)
    console.log(number)

     if(isNegative && num>Math.pow(2,31)){
        return 0
     }
   
        return isNegative?-rverse:rverse
 

 }
 let t=rev(-123)
 console.log(t)





// var reverse = function(x) {
//     const isNegative = x < 0;
//      console.log(isNegative);
//     const xStrArr = Math.abs(x).toString().split("");
//     //console.log(xStrArr);
//     const reversStr = xStrArr.reverse().join("");
//      console.log(reversStr,"reverse");
//     const num = Number(reversStr);
//     if (isNegative && num > Math.pow(2, 31)) {
//         return 0;
//     }
//     if (!isNegative && num > Math.pow(2, 31) - 1) {
//         return 0;
//     }
//     return isNegative ? -num : num;
// };

// let x=reverse(9010000)
// console.log(x)