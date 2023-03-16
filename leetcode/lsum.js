// let arr=[1000000001, 1000000002 ,1000000003 ,1000000004 ,1000000005]

//  let  sum=0;
//  for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//  }
//  console.log(BigInt(sum))

//find ratio of arr elm;

let arr = [-4 ,3 ,-9, 0, 4 ,1];
let n=arr.length

 let pad={};
 for(let i=0;i<arr.length;i++){
    if(pad[arr[i]]==undefined){
        pad[arr[i]]=1
    }
    else{
        pad[arr[i]]++
    }
 }
 let ans=[]
 let positive=0;
 let negative=0;
 let nutral=0
 for(let  key in pad){
 
    if(Number(key)>0){
       positive+=Number(pad[key])
       arr.push(positive)
       
    }
    if(Number(key)==0){
       nutral+=Number(pad[key])
      arr.push(nutral)
       
    }
    if(Number(key)<0){
        negative+=Number(pad[key])
        arr.push(negative)
    }
 }
 

 for(let i=0;i<arr.length;i++){
    console.log(arr[i]/i).FixedTo
 }
