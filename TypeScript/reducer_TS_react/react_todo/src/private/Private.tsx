import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { storeRes } from "../redux-arch/app_reducer/const";


export default function Private({children}:any){

    const isloggedin=useSelector((store:storeRes)=>store.appreducer.islogin)

    if(!isloggedin){
        return <Navigate to='/' />
    }
    else return children
}