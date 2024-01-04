import { Link } from "react-router-dom";
import { useState } from "react";

const UserNav = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const handleDropMenu = ()=>{
        console.log('Dropdown icon clicked');
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }
    return(
        <div className="flex items-center justify-center  gap-4 ">
            <div className={`hidden md:flex md:gap-14`}>
                <Link to="/" className="text-white font-medium">
                    Home
                </Link>

                <Link to="/dashboard" className="text-white font-medium">
                    DashBoard
                </Link>

                <Link to="/pricing" className="text-white font-medium">
                    Pricing
                </Link>
            </div>

            <div className="md:hidden"
                onClick={handleDropMenu}
            >
                <i className="fi fi-sr-menu-burger"></i>
            </div>

            <div className={`flex gap-4  flex-col md:hidden ${isMenuOpen ? 'hidden' : "block"}`}>
                <Link to="/" className="text-white font-medium">
                    Home
                </Link>

                <Link to="/dashboard" className="text-white font-medium">
                    DashBoard
                </Link>

                <Link to="/pricing" className="text-white font-medium">
                    Pricing
                </Link>
            </div>


            <Link to={'/signin'}>
                <button className="bg-[#e82222] hover:bg-[#ca2323] text-white font-medium py-2 px-4 rounded-full">
                    Start Free Trial
                </button>
            </Link>

            <button className="bg-[#2a6885] hover:bg-[#235a73] text-white font-medium py-2 px-4 rounded-full">
                Schedule Demo
            </button>

            
        </div>
    )
}


export default UserNav;