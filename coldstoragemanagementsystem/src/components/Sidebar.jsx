import { Typography } from "@mui/material";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { IoBagSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import {Link} from "react-router-dom"
import { FaAnglesLeft } from "react-icons/fa6";
function Sidebar({closeSidebar,}){
    return(
        <>
       <div className=" main bg-gray-100 px-5 py-7 h-screen w-48"
       
        
       >
 <div className="relative h-full flex flex-col justify-between">
<div>
    <div className="absolute right-0 lg:hidden"> <button onClick={closeSidebar}>
         <FaAnglesLeft />
        </button>
         </div>
    <h1  className="font-semibold text-xs">
  Storage Dashboard
    </h1>
    <div className="mt-8">
        <ul className="space-y-2">
            <li >
                <Link to="/" className="px-3 py-2 bg-black text-white rounded-md flex items-center space-x-1">
                 <MdDashboard className="text-sm"/>
             <p className="text-xs">Dashboard</p>
                </Link>
             </li>
            <li> 
                <Link  to="/inventory" className="px-3 py-2   text-black rounded-md flex items-center space-x-1 hover:bg-gray-200">
                <IoBagSharp className="text-sm"/> <p className="text-xs">Manage Inventory </p>
                </Link>
                </li>
            <li > 
            <Link  to="/suplier" className="px-3 py-2   text-black rounded-md flex items-center space-x-1 hover:bg-gray-200">
                <FaUserEdit className="text-sm"/> <p className="text-xs">Manage Supplier</p>
                </Link>
                </li>
            <li > 
            <Link to="/storage"  className="px-3 py-2   text-black rounded-md flex items-center space-x-1 hover:bg-gray-200">
                <FaBox className="text-sm"/> <p className="text-xs">Manage Storage</p>
                
            </Link>
                </li>
            <li > 
            <Link  className="px-3 py-2   text-black rounded-md flex items-center space-x-1 hover:bg-gray-200">
                <IoIosSettings className="text-sm"/> <p className="text-xs">Settings</p>
                </Link>
                
                </li>
        </ul>
        <div>
            
        </div>
    </div>
</div>
<div className="last-div  border-t border-gray-300 pt-6 ">
    <div >
<Link className="px-3 py-2   text-black rounded-md flex items-center space-x-1 hover:bg-gray-200">
    <IoLogOutSharp className="text-sm"/>
   <h1 className="text-xs">Log out</h1>
</Link>
    </div>
</div>
 </div>
       </div>
        </>
    )
}

export default Sidebar;