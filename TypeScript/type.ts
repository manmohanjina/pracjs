

//definign a type in ts;


 type User ={
name:string,
age:number,
city:string
 }



 function createUser(user:User){
   let obj={
    name:'manish',
    age:23,
    email:'m@m.com',
    city:user.city
   }
   
    return obj
    

 }

 let t=createUser({name:"manihs",age:23,city:'kashipur'})
console.log(t);


 export {}