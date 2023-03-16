//find the pair

let arr=[10,10,10, 20,20,20,20,  30, 50,  ]


function pair(arr){
    let pad={};
for(let i=0;i<arr.length;i++){

    if(pad[arr[i]]==undefined){
        pad[arr[i]]=1
    }
    else{
        pad[arr[i]]++
    }
}
console.log(pad)

 let count=0;

 for(let key in pad){
    if(pad[key]>1&& Number(pad[key]-1)%2==0){
         count+=Number(pad[key]-1)
    }
    if(pad[key]==2 || Number(pad[key]%2==0)){
        count+=Number(pad[key])
    }
 }
 return count

}

let t=pair(arr)
console.log(Math.floor(t/2))

