import { useEffect, useState } from "react"
import {getTodos} from "../api"
import { TodoType } from "../constant" 
import TodoInput from "./Todoinput"
import TodoItem from "./TodoItem"


export default function Todoapp(){



    const [data,setdata]=useState<TodoType []>([])
  

    const addresTodo=(todo:TodoType)=>{
        setdata([...data,todo])
    }
      

useEffect(()=>{
 getTodos().then((res)=>{
    setdata(res)
 })
},[])



    return <div>

<h3>Todo App</h3>

 
 <TodoInput fn={addresTodo} />

{
    data&&data.map((elm)=><TodoItem key={elm.id} {...elm} />)
}

    </div>
}