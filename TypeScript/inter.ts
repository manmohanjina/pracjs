
interface User{

    email:string,
    userid:number,
    googleID?:number
    readonly _id:number
    startTrail:()=>string,
    getCoupon(named:string,value:number):number
}



const manish:User={email:"m@m.com",userid:123,googleID:123,_id:121,

startTrail:()=>{
return "started"
}

,
getCoupon:(named:"manish",off:2)=>{
    
    return 1
}
 
}


const interObj:User={email:"h@g.com", userid:123,_id:123,startTrail:()=>{
    return "string"
},
getCoupon:()=>{
    return 2
}


}

 

 


 export {}