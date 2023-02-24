// function check() {
//   let value = 30;

//   function sum(s) {
//     console.log(value + s);
//   }

//   function subtract(sub) {
//     console.log(value - sub);
//   }

//   function mul(v) {
//     console.log(value * v);
//   }
//   subtract(30);
// }

// const out = function (numb) {
//   const add = function (value) {
//     return (+value + value + "");
//   };
//   return add(numb);
// };




// function outer(){
//   let count=0;
//   console.log('count at first call',count)
//   const x= ()=>{
//     count++
//     console.log(count,'inside the function')
//   }
//   console.log('finist',count)
//   return x
// }
// var a= outer()
// outer()
// outer()
// // console.log(a)
// a()
// a()
// a()



//createing a toggle function using closure


//  function toggle(...args){
    
//     let index=0
 
    
//     return ()=>{
       
// if(index==args.length){
//     index=0
// }
// return args[index++]
//     }
    
//  }

//  let t=toggle('manish','falfdsse')
  
//  for(let i=0;i<100;i++){
//    setTimeout(()=>{
//         let k=t()
//         console.log(k)
//     },i*1000)
    
//  }


