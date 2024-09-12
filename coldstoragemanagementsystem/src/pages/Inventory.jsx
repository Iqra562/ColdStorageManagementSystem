import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import avatar from "../assets/images/avatar.jpg"
function Inventory(){
    return(
        <>
         <div className="flex justify-between items-start px-3 mt-5">


  
    
   <div className="relative  rounded-md shadow-sm flex-1 mr-5">
   <input
       id="price"
       name="price"
       type="text"
       placeholder="Search..."
       className="block w-full  rounded-md border-0 py-0.5 pl-7 pr-20 text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
   <div className="overflow-x-scroll px-3 mt-10">
  <table className="min-w-full table-auto border-collapse">
    <thead className="">
      <tr>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Inventory Name</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Inventory Code</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Quantity</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Storage Temperature</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Storage Section Number</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Date of Entry</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Expiration Date</th>
        <th className="px-4 py-2  text-left text-sm font-normal text-gray-400">Supplier Name</th>
   
       
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white">
        <td className="px-4 py-2 border border-red-500 text-sm text-gray-700">John Doe</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">john@example.com</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">Admin</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">Admin</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">Admin</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">Admin</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">Admin</td>
        <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">Admin</td>
     
      </tr>
   
    </tbody>
  </table>
</div>

        </>
    )
}

export default Inventory