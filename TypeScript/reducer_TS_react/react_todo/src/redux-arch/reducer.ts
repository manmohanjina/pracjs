import * as types from "./action-type"

export type state={
    isloading:boolean,
    isError:boolean,
    count:number
}


const intstate:state={
    isloading:false,
    isError:false,
    count:0

}
type inc={
    type:"INCREMENTCOUNT",
    payload:number
}
interface dec{
    type:"DECREMENTCOUNT",
    payload:number

}

type Action=inc|dec
 

const reducer=(state=intstate, action:Action )=>{

    const {type,payload}=action;
switch(type){

    case types.INCREMENTCOUNT:return{...state,count:state.count+payload }

    case types.DECREMENTCOUNT:return {...state, count:state.count-payload}
    
    default :return state.count
}




 }


 export {reducer}