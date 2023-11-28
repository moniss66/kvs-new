import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/company_logo.png";

const AdminNavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex flex-row justify-between items-center flex-wrap h-42 relative text-bblue nav-links bg-black">
      <a href="/admin" style={{width:"100px"}}><img
        className=" ml-5"
        alt="kec logo"
        style={{ width: "100%" }}
        src={logo}
      ></img></a>
      <div className="text-dark flex justify-between items-center h-24 w-4/5 max-w-[1240px] ">
        <Link to="/">
          <h1 className="w-full text-2xl md:text-5xl  font-bold font-poppins tracking-wide text-white  ">
            
          </h1>
        </Link>

        <ul className="hidden md:flex font-mono">
          <li className="px-4 text-lg">
            <Link to="/admin">Add products</Link>
          </li>
          <li className="px-8 text-lg font-mono">
            <Link to="/adminProduct">Products</Link>
          </li>
          <li className="px-0 text-lg font-mono">
            <Link to="/orderList">Orders</Link>
          </li>
          <li className="px-12 text-lg font-mono">
            <Link to="/usersList">Users</Link>
          </li>
       
        </ul>
        <div onClick={handleNav} className="block md:hidden ">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-bblue"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-2xl font-bold  m-2 font-poppins ">
            {" "}
            KVS Garments{" "}
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 font-mono">
              <Link to="/admin">Home</Link>
            </li>
            <li className="p-4 border-b border-gray-600 font-mono">
              <Link to="/adminProductList">Products</Link>
            </li>
            <li className="p-4 border-b border-gray-600 font-mono">
              <Link to="/orderList">Orders</Link>
            </li>
            <li className="p-4 border-b border-gray-600 font-mono">
              <Link to="/usersList">Users</Link>
            </li>
            <li className="p-4 border-b border-gray-600 font-mono">
              <Link to="/login">Login/register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
