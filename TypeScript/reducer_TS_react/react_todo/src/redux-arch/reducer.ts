import { actionType, todoType } from "./constant";



const intstate:todoType={
    todos:[]
}

const reducer=(state:todoType=intstate, action:actionType)=>{

    const {type,payload}=action;


    switch(type){

        case "add_todo":return {...state, todos:[...state.todos,payload]}

        default: return state
    }
}

export {reducer}