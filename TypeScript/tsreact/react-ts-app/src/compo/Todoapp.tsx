import { useEffect, useState } from "react"
import {getTodos} from "../api"
import { TodoType } from "../constant" 
import TodoInput from "./Todoinput"
import TodoItem from "./TodoItem"


export default function Todoapp(){


const [count,setCount]=useState<number>(0)
    const [data,setdata]=useState<TodoType []>([])
  

    const addresTodo=(todo:TodoType)=>{
        setdata([...data,todo])
    }

    const toggle=(single:TodoType)=>{
     
        const filterdata=data.filter((elm)=>elm.id!==single.id)

        setdata([single,...filterdata])
    }
      

useEffect(()=>{
 getTodos().then((res)=>{
    setdata(res)
 })
},[])

const handelDel=(delres:TodoType,id:number)=>{
  
    const filterdata=data.filter((elm)=>elm.id!==id)

    setdata(filterdata)
    
    
}



    return <div>

<h3>Todo App</h3>

 
 <TodoInput fn={addresTodo} />

{
    data&&data.map((elm)=><TodoItem updateDel={handelDel} toggle={toggle}  key={elm.id} {...elm} />)
}

    </div>
}