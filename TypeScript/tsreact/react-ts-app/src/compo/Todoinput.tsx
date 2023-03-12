import { type } from "os"
import React, { useState } from "react"
import { addTodo } from "../api"
import { TodoType } from "../constant"



type todoipProp={
    recive?:()=>void
    fn:(todo:TodoType)=>void
}

export default function TodoInput(props:todoipProp ){


     const {fn}=props;
    
    const [text,setText]=useState<string>("")
    
    //ts does not know the type of the event when we pass event to afunction
    //ts needs to know how we know that e.target.value exists


    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setText(e.target.value )
console.log(text);
    }
    const handelSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
  
       e.preventDefault()
       
     
       let payload:TodoType={
        id:new Date().getTime(),
        titel:text,
        status:false
       }



       addTodo(payload).then((res)=>{
       fn(res)
       }).catch((er)=>{
        console.log(er)
       })
       

    }


     
    return <div>

    <form onSubmit={handelSubmit} >

        <input type="text" value={text} onChange={handelChange}  />
        <button  >Add Todo</button>
    </form>
    </div>
}