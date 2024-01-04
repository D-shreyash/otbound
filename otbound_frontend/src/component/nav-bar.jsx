import {Link} from "react-router-dom";
import UserNav from "./userNav";

const Navbar = ()=>{
    return(
        <div className="flex flex-row justify-between">
            <Link to='/' className="pr-[20%] text-white font-medium text-2xl">
                <h3>Logo</h3>
            </Link>

            <UserNav/>
        </div>
    )
}

export default Navbar;