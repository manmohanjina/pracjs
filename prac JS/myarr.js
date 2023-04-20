 const arr = [3, 6, 9, 1, 2, 3, 4, 5, 6];

Array.prototype.mymap = function (logic) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] ** 2);
  }

  return arr;
};

let t = arr.mymap((arr) => arr);

// //filter

// Array.prototype.myF = function (cb) {
//   let newarr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       newarr.push(this[i]);
//     }
//   }
//   return newarr;
// };

// let te = arr.myF((elm, i, arr) => {
//   if (i % 2 == 0) {
//     return;
//   }
// });

// // console.log(te)
// let check = [];
// let newarr = arr.filter((elm, i, arr) => {
//   if (elm % 2 == 0) {
//     check.push(i);
//   }
// });
// // console.log(check,'newarr')

// function func(params) {
//   console.log("clg1");
//   return () => {
//     console.log("clg2");
//     params();

//     return () => {
//       console.log("clg4");
//       return "clg5";
//     };
//   };
// }

// // func(() => {
// //   console.log("clg3");
// // })()();

// let t1 = [1, 2, 3, 4, 5];

// // console.log(t1.filter());

// var a = 10;
// let b = 20;
// var c = true;

// if (c == true) {
//   var a = 20;
//   let b = 20;
// }
// //
// let new_arr=arr.forEach((elm)=>console.log(elm))
// console.log(new_arr)

// const arr = [1, 2, 3, 4, 5, 6];

// let new_arr = arr
//   .filter((elm) => elm % 3 == 0)
//   .reduce((acc, curr) => {
//     return acc + curr ** 3;
//   },1);
// console.log(new_arr);

// let arr = [1,2,3,4,5,6];
 
let index=[]
for(let i=0;i<arr.length;i++){
  index.push(i+1)
}
 
// arr=arr.sort((a,b)=>a-b)


for(let i=0;i<arr.length-1;i++){
  for(let j=0;j<arr.length-1-i;j++){
    if(arr[j]<arr[j+1]){
      let temp=arr[j]
      arr[j]=arr[j+1]
      arr[j+1]=temp

      let inf=index[i]
      index[i]=index[i+1]
      index[i+1]=inf
    }
  }
}
console.log(index)