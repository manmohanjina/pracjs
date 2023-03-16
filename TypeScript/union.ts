
//union in ts
//instead of datatype we can use union;


//it can be sometime a string also some times;
let score:number|string=33;
score="manish"


type User={
    name:string,
    age:number,
    id:number
}

type Admin={
    adminName:string,
    id:number
}

let Manish:User|Admin={

id:123,
adminName:"123"
}




function getData(id:number|string){
   
    if(typeof id ==="string"){
        console.log(id.toLocaleLowerCase());
        
    }
    else{
     return id+2
    }

}
// let t=getData(2)
// console.log(t);

const arr:Array<number|string>=[2,3,4,"hel"]


const number:Array<number>=[2,4,56]
const str:Array<string>=['234','helop']

// const both:Array<string>|Array<number>=[123,'qwe']
//this cannot happen

const either:Array<number|string>=["123",234]

 

//declaring a variable explicityly;

let myName:"manish"|"manmohan"



export{}