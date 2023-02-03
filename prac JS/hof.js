const arr = [2, 4, 6, 8];

function double(num) {
  return num * 2;
}
function triple(num) {
  return num * 3;
}
// function binary(num){
//   return num.toString(2)
// }
//this is one way of writing the map in eS5

// const d=arr.map(function binary (num){
// return num.toString(2)
// })
// console.log(d)

//writing map in es6

// const d=arr.map((elm)=>elm.toString(2))
// console.log(d)

// const d=arr.filter((elm)=>{
//   return elm>4
// })
// console.log(d)

// const x=arr.filter(function check(x){
//   return x>4
// })
// console.log(x)

//reduce HOF
//what is the maxno and sum of arr;
//#1 normal method of doing it;
// function addSum(num) {
//   let sum=0;
//   for(let i=0;i<num.length;i++){
//     sum+=num[i]
//   }
//   return sum
// }
// let t=addSum(arr)
// console.log(t)

//function to check max no in arr;

// function maxreturn(num){
//   let max=-Infinity;
//   for(let i=0;i<num.length;i++){
//     if(max<arr[i]){
//      max=arr[i]
//     }
//   }
//   console.log(num)
//   return max
// }
// console.log(maxreturn(arr))

//reduce way
// const redu= arr.reduce(function check(acc,curr){
//   return acc+=curr
// })
// console.log(redu)

// const redu=arr.reduce((acc,curr)=>acc+=curr)
// console.log(redu)

//max no in arr using reduce

// const d=arr.reduce(function check(acc,curr){
//   if(curr>acc){
//     acc=curr
//   }
//   return acc
// },0)
// console.log(d)

//#2 diffrent example;

const arr1 = [
  { name: "manish", age: 26, city: "kashipur" },
  { name: "manish", age: 26, city: "kashipur" },
  { name: "rohit", age: 23, city: "haldwani" },
  { name: "hitesh", age: 25, city: "rudrpur" },
];

// const op = arr1.reduce(function check(acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
//name of ppl whose age is less the  30
//chaining the hof
// const op=arr1.filter(function check(elm){

//  if(elm.age<26){
//     return elm
//  }

// }).map((elm)=>elm.name)
// console.log(op)

 //without chaining using reduce

//  const op=arr1.reduce((acc,curr)=>{
//  if(curr.age<26)
//  {
//     acc.push(curr.name)
//  }
//  return acc
//  },[])
// console.log(op)