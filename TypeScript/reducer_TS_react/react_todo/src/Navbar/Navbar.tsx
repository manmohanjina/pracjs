
import {Link} from "react-router-dom";
export default function Navbar() {
  
    const linkdata=[{to:"/", name:'home'},{to:'/contact',name:"Contact"},{to:'/user',name:'User'}]
  
    return (
    <>
       {
        linkdata.map((elm,i)=>{
            return <Link key={i} to={elm.to}  >{elm.name} </Link>
        })
       }
    </>
  );
}
