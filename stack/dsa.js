const arr = [1,2,3,4,5,6];

 
//print the arr recursivly;
let i=0
async function print(arr,n){
     
     console.log(arr[i])
if(i===arr.length)return
    print(arr,n,i+1)
}
print(arr,arr.length,i)
