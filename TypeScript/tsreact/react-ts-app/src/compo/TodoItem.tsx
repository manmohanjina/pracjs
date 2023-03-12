import { TodoType } from "../constant"

interface TodoProps{
    id:number,
    titel:string,
    status:boolean
}


export default function TodoItem (props:TodoProps){
    
   

    
    
    return <div>
        <h3>Todo Item</h3>
        <h2>{props.id}</h2>
        <h3>{props.titel}</h3>
        <h3>{props.status?"true":'false'}</h3>
    </div>
}