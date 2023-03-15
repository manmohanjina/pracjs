
import * as types from "./action-type"


const handelInc=(payload:number):{type:string,payload:number}=>{
    return {type:"INCREMENTCOUNT",payload}
}

const handelDec=(payload:number):{type:string, payload:number}=>{
    return {type:types.DECREMENTCOUNT,payload}
}

export {handelInc,handelDec}