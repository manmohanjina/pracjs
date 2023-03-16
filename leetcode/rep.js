//remove the repeted elm from arr and leave underscore inits place;

let arr = [0,0,1,1,1,2,2,3,3,4];// [0,1,2,3,4,_,_,_,_,_]
let newarr=new Array(arr.length)

//1st remove dublicate;

//  let set=new Set();

//   for(let i=0;i<arr.length;i++){
//     set.add(arr[i])
//   }
//  let bag=''
//   set.forEach((elm)=>{
// bag+=elm
//   })

//   let bagarr=[]
//   for(let i=0;i<bag.length;i++){
// bagarr.push(+bag[i])
//   }


 
//   let arr2=new Array(arr.length-set.size).fill(0)
   
// arr2=arr2.map((elm)=>elm="_")

//  let arr1=[]
//   for(let i=0;i<set.size;i++){
//       arr1.push(+bag[i])
//   }

// console.log(arr1.concat(arr2));


// let set=new Set();

// for(let i=0;i<arr.length;i++){
//     set.add(arr[i])
// }
// let arr3=[]

// set.forEach((elm)=>{
//     arr3.push(+elm)
// })
// console.log(arr3)

function removeDuplicates(nums) {
    let numCount = 1;
    const numsLen = nums.length;
    for (let i = 1; i < numsLen; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[numCount] = nums[i];
            numCount++;
        }
    }
    nums = nums.slice(0, numCount)
    console.log(nums)
    return numCount;
}

let t=removeDuplicates(arr)
console.log(t);