
type User={
    name:string,
    email:string,
    age:number,
   readonly _id:string,
   creditcard?:number
}

function createUser(a:User){
    console.log(a)
}

let obj:User={
    name:'manish',
    email:"m@m.com",
    age:23,
    _id:"123"
    

    
}
// obj.name="123"

// createUser(obj)


//combination of two types in ts;


type username={
    name:string,

}

type userAge={
    age:number;
}




