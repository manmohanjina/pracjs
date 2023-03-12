import { useState } from "react"
import { TodoType } from "../constant"

interface TodoProps{
    id:number,
    titel:string,
    status:boolean,
    toggle:(single:TodoType)=>void,
    updateDel:(up:TodoType,id:number)=>void
}


export default function TodoItem (props:TodoProps){
    
    const {toggle,updateDel}=props
   
    const handelToggle=(id:number)=>{
  
       fetch(`http://localhost:8080/todo/${id}`,{
        method:"PATCH",
        body:JSON.stringify({status:!props.status}),
        headers:{
            "content-type":"application/json"
        }
       }).then((res)=>res.json()).then((result)=>{
          
        toggle(result)
       })
         
    }
    const [count,setcount]=useState<number>(0)

    const handeldel=(id:number)=>{
        fetch(`http://localhost:8080/todo/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        }).then((res)=>{
           return res.json()
        }).then((data)=>{
            updateDel(data,id)
        })


    }

    
    
    return <div style={{border:"1px solid red",width:"50%",margin:"auto"}} >
       <div  >
       <h3>Todo Item</h3>
        <h2>{props.id}</h2>
        <h3>{props.titel}</h3>
        <h3>{props.status?"true":'false'}</h3>
        <button onClick={()=>handelToggle(props.id)} >toggle</button>
        <button onClick={()=>handeldel(props.id)} >just del it</button>
       </div>
        
    </div>
}