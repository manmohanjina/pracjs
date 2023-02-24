//Q= in given arr find the max sum of subarr of size K
let k = 2;
const arr = [100, 200, 300, 400];
//all the sub arr possible
//100,200
//200,300,
//300,400

//first we'll use brute force technique
let max=-Infinity
let sum=0
for(let i=0;i<arr.length;i++){
    let bag=""
  
    for(let j=i+1; j<arr.length-1;j++){
         bag+=arr[j]
         sum+=arr[j]
         if(bag.length==k  &&  sum>max){
           
            max=sum
            console.log(sum,'sum')
         }
    }
    
}
