import * as types from "./actiontypes"
import { actionTypeobj } from "./const/const"


const decano_FN=(payload:number):actionTypeobj=>{
    return {type:types.decreaseno,payload}
}

const increno_FN=(payload:number):actionTypeobj=>{
    return {type:types.increaseno,payload}
}

export {
    decano_FN,increno_FN
}


