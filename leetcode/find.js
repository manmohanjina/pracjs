//find the quireies in given string;


let str=[ 'aba', 'baba', 'aba', 'xzxb' ]
let q= [ 'aba', 'xzxb', 'ab' ]
//brute force

let ans=q.filter((elm,i)=>{
    if(elm===q[i]){
        console.log(q[i])
        return elm
    }
})
console.log(ans)
 
