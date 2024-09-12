import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import avatar from "../assets/images/avatar.jpg"
function Home(){
    return(

        <>
       <div className="flex justify-between items-start px-3 mt-5">

   <div>
    <h6>Today's Plan</h6>
    <p className="text-gray-300 text-[10px]">31 March 2016</p>
   </div>
     
{/*     
      <div className="relative  rounded-md shadow-sm ">
      <input
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          className="block w-full  rounded-md border-0 py-1 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<CiSearch/>
        </div>
      

      </div> */}

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

export default Home;