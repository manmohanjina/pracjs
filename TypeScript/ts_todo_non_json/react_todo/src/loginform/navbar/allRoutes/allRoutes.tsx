
import {Routes, Route} from "react-router-dom"
import Login from "../pages/login"
import Main from "../pages/main"
import Register from "../pages/register"


export default function AllRoutes(){

    return <Routes>
        <Route path={'/'} element={<Register/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>

        <Route path="/main" element={<Main/>} ></Route>
    </Routes>
    
}