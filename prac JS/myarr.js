
const arr=[3,6,9,1,2,3,4,5,6]

Array.prototype.mymap=function(logic){
    let arr=[]
    for(let i=0;i<this.length;i++){
        arr.push(this[i]**2)
    }

    return arr
}

let t=arr.mymap((arr)=>arr)


//filter

Array.prototype.myF=function(cb){
let newarr=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            newarr.push(this[i])
        }
    }
    return newarr
}


let te=arr.myF((elm,i,arr)=>{
 if(i%2==0){
    return 
 }
})

// console.log(te)
let check=[]
let newarr=arr.filter((elm,i,arr)=>{
    if(elm%2==0){
       check.push(i)
    }
})
console.log(check,'newarr')