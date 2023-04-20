import { actionTypeobj } from "./const/const"
import * as types from "./actiontypes"
 type intstate={
 count:number
}

const intstate:intstate={
    count:0
}

const reducer=( state=intstate,action:actionTypeobj)=>{
        
     const {type,payload}=action;

     switch(type){
        
        case types.decreaseno:return {...state, count:state.count-payload}

        case types.increaseno:return {...state, count:state.count+payload}

        default :return state;

     }
}

export {reducer}