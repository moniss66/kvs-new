import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../../assets/company_logo.png'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-evenly items-center flex-wrap h-42 relative nav-links bg-black">
            <img className=" ml-5 kvs-logo" alt="kvs logo" style={{ width: "calc(100%*0.09)" }} src={logo} ></img>
            <div className="text-dark flex justify-between items-center h-24 w-4/5 max-w-[1240px] ">

                <Link to="/"><h1 className="w-full text-2xl md:text-5xl  font-poppins tracking-wide text-white shop-name "></h1></Link>

                <div className="flex justify-evenly ">
                    <ul className="hidden md:flex">
                    <li className="px-10 text-lg font-mono"><Link to="/">Home</Link></li>
                    <li className="px-4 text-lg font-mono"><Link to="/productlist">Products</Link></li>
                    <li className="px-5 text-lg font-mono"><Link to="/contact">Request us</Link></li>
                    <li className="px-5 text-lg font-mono"><Link to="/cart">My cart</Link></li>
                    <li className="px-5 text-lg font-mono"><Link to="/myorders">My Orders</Link></li>

                    </ul>
                   <ul className="hidden md:flex">
                   <li className="px-3 text-lg font-mono"><Link to="/login"><i class="fa-regular fa-user"></i> Login </Link></li>
                   </ul>
                   
                </div>


                <div onClick={handleNav} className='block md:hidden '>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full nav-links border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    {/* <h1 className="w-full text-2xl font-bold  m-2 font-poppins "> KVS Garments</h1> */}
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600font-mono"><Link to="/home">Home</Link></li>
                        <li className="p-4 border-b border-gray-600 font-mono"><Link to="/productlist">Products</Link></li>

                        <li className="p-4 border-b border-gray-600 font-mono"><Link to="/cart">My cart</Link></li>
                        <li className="p-4 border-b border-gray-600 font-mono"><Link to="/">Request us</Link></li>
                        <li className="p-4 border-b border-gray-600 font-mono"><Link to="/login">Login/register</Link></li>

                    </ul>
                </div>
            </div>
            {/* <img className="mr-5" alt="club logo" style={{width:"calc(100%*0.09)"}} src = {logo}></img> */}
        </div>
    )
}

export default NavBar;