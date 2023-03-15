//declaring a ennum;
//they are bascicly named constatn so that someone canot manipulate them

//eg:- 
// enum gender{
//     "male",
//     "female",
//     "prefer_not_to_day"
// }

// const Gender:gender=gender.male

// console.log(Gender)

///above mention eg of enum is not optimized way becuse after compilaaion it is storing index of enum declared inside it

enum gender{
    male="male",
    female="female",
    trans="trans"
}

const man:gender=gender.trans


//tupple in ts ;
//they work as an array but with additional conditions 
//where do we use them;
//we use them when we know that how many elemnets are going to be in the arr we are going to declare inside the tupple;
//+type of the array should also predefined;

//eg if we want to store string and no inside and array only;


// let arr:(number|string)[]=[123,"maish","123",123]

// let arr1:Array<number|string>=["123",123]


//this is one method of declaring an array with elem inside it only to be string or number;

//but by using tupple we can also predefine that the order of the indexes as well;

//eg:- 
// let arr:[string, number]=["123",123]
//over here oreder of the arr also matters 



//genric functions in TS:-;


const genricfunction=<T>(args:T[]):T[]=>{
    return args
}

// let a:string="manishj"
// let b:number=2;
// let c:boolean=false;



let ar:string[]=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
let no=[1,2,3,4,5,"str"]
let st:object[]=[{name:'manish'},{name:"hema"},{name:"jina"},{name:"hema"}]

 
// let str=genricfunction<number|string>(no)
// console.log(str)



//how we can create our own genric useState();



const useState=<T>(a:T):[T, (a:T)=>void]=>{

    let v:typeof a=a
    const setv=(newvalue:T ):void=>{
     v=newvalue
    }
    return [v,setv]
}



const [state,setState]=useState<number>(2)


