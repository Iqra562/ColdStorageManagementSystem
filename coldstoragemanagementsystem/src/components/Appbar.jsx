import React from "react";
import { BiSolidMessage } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import avatar from "../assets/images/avatar.jpg"
function Appbar(){
    return(
        <>
         <div className="flex justify-between items-start px-3 mt-5 ">


  
    
<div className="relative  rounded-md shadow-sm flex-1 mr-5">
<input
    id="price"
    name="price"
    type="text"
    placeholder="Search..."
    className="block w-full  rounded-md border-0 py-0.5 pl-7 pr-20 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-gray-300 focus:outline-none"
  />
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<CiSearch/>
  </div>


</div>

<div className="flex space-x-3">

<div className="border border-gray-300 rounded-full p-1">
<BiSolidMessage className="text-sm"/>
</div>
<div className="border border-gray-300 rounded-full p-1">
<IoIosNotifications className="text-sm"/>
</div>
<div className="border-r border-gray-200 h-6"></div>
<div className="flex space-x-2 items-center">

<div className="rounded-full overflow-hidden w-6 h-6">
<img src={avatar} className="w-full h-full object-cover" alt="" />

</div>
<div>
  <h6 className="text-black text-xs font-medium">John Doe</h6>
</div>
</div>
</div>
</div>
        </>
    )
}
export default Appbar;