
import {Link} from "react-router-dom"

export default function Navbar(){


    return <div>

        <Link to='/'  >register</Link>
        <Link to='/login' >Login</Link>
        <Link to='/main' >Home </Link>
    </div>
}