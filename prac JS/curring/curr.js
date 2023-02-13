//funciton curring using bind method


function multiply(a, b) {
  return a * b;
}

let b = multiply.bind(this, 2);
// console.log(b(4));

///curring using closures


// function add(a){

//     return(b)=>{
//         console.log(a*b)
// return a+b
//     }
// }
// let t=add(3)
// (3)
// console.log(t)