import axios,{AxiosResponse}  from "axios"
import { TodoType } from "./constant"


const getTodos=async() =>{
    let response: AxiosResponse <TodoType []>= await axios.get ('http://localhost:8080/todo')
    return response.data
}


const addTodo=async(payload:TodoType)=>{
    console.log(payload,'consoling the payload')
   
    let response:AxiosResponse <TodoType>=await axios.post('http://localhost:8080/todo',payload)
    return response.data
}

const updateTodo=async(id:number,titel:string)=>{
 
    let response:AxiosResponse<TodoType>=await axios.patch(`http://localhost/todo/${id}`,titel)
    return response.data

    
}


export {getTodos,addTodo,updateTodo}



