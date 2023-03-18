
import { error } from "console";
import * as types from "./actionType"
import { actionDataType, resDataType, storeDataType } from "./const";
 

type inistateType={
    isloading:boolean,
    data:[],
    isError:boolean,
    islogin:boolean,
    islogout:boolean
}



const intstate:inistateType={
    isloading:false,
    data:[],
    isError:false,
    islogin:false,
    islogout:false
}




 const reducer=(state=intstate,action:{type:string,payload:actionDataType})=>{

    const {type,payload}=action;

     switch(type){

        case types.datareq:return {...state, isloading:true, data:null, err:false}

        case types.datasucc:return {...state, isloading:false, data:payload,err:false}

        case types.dataerr:return {...state, loading:false , data:"null", err:true}

        default :return state
     }

 }

 



 export{reducer}