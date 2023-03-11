

//declaring a function in js

// const fun=(a,b)=>{
  //return a+b
//}


// function sum(a:number, b:number):string{
//   return  "sdf"
// }


// let t=sum(2,3)



//function for accepting userinfo ;


function  takeValue(name:string, email:string, age:number){
  
     console.log(name,email,age)
}

//takeValue('mansih', "manish63singh@gmail.com", 21)



//how to return more than one type from a function
//  function getVal(a:number):number|{
//     if(a>5){
//       return  true
//     }
//     else{
//       return "false"
//     }
//  }

 //this method will cause error in our code 



//writting function in fat arrow function 
//  const getHello=(s:string):string=>{

//    return "hello manish"
//  }



// const heroes= ['thor','spiderman', 'captainMarvel',2,2]

// let newhero=heroes.map((elm):string|number=>{
// return 1
// })



function logError(e:string):void {

  console.log(e);
  
  
}

logError('err')




export {}