let arr = [3,2,4];
let index=[]
 
for(let i=0;i<arr.length;i++){
    index.push(i)
}
 
let sortarr=arr.sort((a,b)=>a-b)

let k=6;
let left=0;
let right=sortarr.length-1;
let a;
let b;
while(left<right){
    if(arr[left]+arr[right]==k){
 
    }

    if(arr[left]+arr[right]<k){
        left++
    }
    else{
        right++
    }
}
console.log('kl');