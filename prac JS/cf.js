
function person(...args){
     let obj={
        name:'',
        change:''
     }
     for(let i=0;i<args.length;i++){
        obj.name=args[i]
        obj.change=args[i]
     }
     return obj
}

let h=new person('hello','rename')
console.log(h)