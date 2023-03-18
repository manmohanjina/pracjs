
import * as types from "./actionType"
import { actionDataType, resDataType } from "./const"


const datareq_FN=()=>{
    return {type:types.datareq}
}
const datasucc_FN=(payload:resDataType)=>{
    
    
    return {type:types.datasucc,payload}
}

const dataerr_FN=()=>{
    return {type:types.dataerr}
}

const login_FN=()=>{
    return {type:types.login}
}

const logout_FN=()=>{
    return {type:types.logout}
}

export{datareq_FN,datasucc_FN,dataerr_FN,login_FN,logout_FN}