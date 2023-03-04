const arr = [1, 2, 3, 4, 5];

// for(var   i=0;i<arr.length-1;i++){
//     setTimeout(()=>{
//         console.log(i,"change",arr[i])
//     },i*1000)

// }

//correct=

//because let create a local scope and
// for(let i=0;i<arr.length;i++){
//     setTimeout(()=>{
//         console.log(i,'change',arr[i])
//     },1000*i)
// }

//resolving same issue with closures

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function (i) {
//     return function () {
//         console.log(arr[i],i)
//     };
//   }(i),i*1000);
// }

// another way is bu creating another functions
//this also correct because it is creating a local scope
// function dispalay(i) {
//   setTimeout(() => console.log(this[i], i), i * 1000);
// }

// for (var i = 0; i < arr.length; i++) {
//     dispalay.call(arr,i)
// }

//using strict mode in js
// 'use strict'
// function check(){

// }
// check()

//recursion in js

//key value pair
// {
//   key: {
//     value: {
//       pair: {
//         javascript: {
//         }
//       }
//     }
//   }
// }
// let str = "key,value,pair,javascript";
// let arr1 = str.split(",");
// function rec(arr, i = 0, obj = {}) {
//   console.log(i, arr[i]);
//   if (i == arr.length) {
//     console.log("reached the end and returning empty obj");
//     return obj;
//   } else {
//     obj[arr[i]] = rec(arr, i + 1);
//     console.log("return value is a obj");
//     return obj;
//   }

// }

let promise =new Promise()
console.log(promise)
