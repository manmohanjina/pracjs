

// const arr=[1,4,3,2]

// let left=0;
// let right=arr.length-1;

// while(left<right){
//      let temp;
//      temp=arr[right]
//      arr[right]=arr[left]
//      arr[left]=temp
//      left++;
//      right--
// }
// console.log(arr)


//shifting an elm 1 point to left by k value;;

let k=4;
let n=5;
let arr=[1,2,3,4,5]

for(let i=0;i<4;i++){
    let p=arr.shift()
    
    arr.push(p)
}
console.log(arr)
