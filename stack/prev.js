//finding a no smaller to it 's left and right 



const arr = [1, 6, 4, 10, 2, 5];
//ans -1,1,1,4,1,2
//prevgreater== -1,-1,6,-1,10,10

// let stack=[];
// let ans=[]
// for(let i=0;i<arr.length;i++){

//     while(stack.at(-1)!==0 && stack.at(-1)<=arr[i]){
//         stack.pop()
//     }

//     if(stack.length===0){
//  ans.push(-1)
//     }
//     else{
//         ans.push(stack[stack.length-1])
//     }

//     stack.push(arr[i])
// }
// console.log(ans)

// for(let i=0;i<arr.length;i++){
//     let prev=-1;
//     for(let j=i-1;j>=0;j--){
//         if(arr[i]>arr[j]){
//             prev=arr[j]
//             break
//         }
//     }
//     ans.push(prev)
// }
// console.log(ans)


function nextsmaller(arr,n){

    let ans=[];
    let stack=[];

    for(let i=n-1;i>=0;i--){
         while(stack.length!==0 &&stack.at(-1)>=arr[i]){
            stack.pop()
         }
         if(stack.length==0){
            ans.push(-1)
         }
         else{
            ans.push(stack.at(-1))
         }
         stack.push(arr[i])
    }
   return ans.reverse()

 //brute force for next smaller elm from right direction
//    for(let i=n-1;i>=0;i--){
//     let prev=-1;
//     for(let j=i+1;j<n;j++){
//         if(arr[i]>arr[j]){
//             prev=arr[j]
//             break
//         }
//     }
//     ans.push(prev)
//    }
//    return ans.reverse()


}
let t=nextsmaller(arr,arr.length)
console.log(t)

