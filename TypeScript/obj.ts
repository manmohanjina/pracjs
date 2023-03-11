
//declaring a object in ts with help of interface;;
interface Userdetail{
    name:string,
    age:number,
    city:string
}

let obj:Userdetail={
    name:'manish',
    age:28,
    city:"kashipur",
   
}


//using a objcts in functions or returns a obj by a  function;


const user={
name:'manish',
age:23,
city:"kashipur"
}


 

function createUser({name:string, age:number}):void{
 
  const {name,age, city}=user;
  console.log(name,age,city);
  
    
    

}
createUser(user)



//how to return a obj from a funciton 


 function Course():{
    name:string,
     isPaid:boolean
 }{
    return {
        name:'typeScript',
        isPaid:false
    }
}



export {}