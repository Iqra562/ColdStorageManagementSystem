import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import avatar from "../assets/images/avatar.jpg"
function Home(){
    return(

        <>
       <div className="flex justify-between items-center px-2">

 
     
    
      <div className="relative mt-2 rounded-md shadow-sm">
      <input
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<CiSearch/>
        </div>
      

      </div>

      <div className="flex space-x-3">
<div className="border border-gray-300 rounded-full p-1">
<IoIosNotifications className="text-sm"/>
</div>
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