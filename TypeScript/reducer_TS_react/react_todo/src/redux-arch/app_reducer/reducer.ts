
import { error } from "console";
import * as types from "./actionType"
import { actionDataType, resDataType, storeDataType } from "./const";
 import {inistateType} from "./const"




const intstate:inistateType={
    isloading:false,
    data:[],
    isError:false,
    islogin:false,
    islogout:false
}




 const reducer=(state=intstate,action:actionDataType)=>{

    const {type,payload}=action;

     switch(type){
        
        case types.login:return {...state,islogin:true,islogout:false}
        case types.logout:return {...state,islogin:false, islogout:true }

        case types.datareq:return {...state, isloading:true, data:null, err:false}

        case types.datasucc:return {...state, isloading:false, data:payload,err:false}

        case types.dataerr:return {...state, loading:false , err:true}

        default :return state
     }

 }

 



 export{reducer}