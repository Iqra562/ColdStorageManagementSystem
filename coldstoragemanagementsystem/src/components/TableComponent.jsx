import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import avatar from "../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import Appbar from "./Appbar";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
function TableComponent({columns,data, onEdit, onDelete,addForm,editForm ,addBtn}){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const handleDeleteClick = (id)=>{
    setDeleteItemId(id);
    setIsModalOpen(true)
  }
  const handleDeleteConfirm = () => {
    onDelete(deleteItemId); 
    setIsModalOpen(false); 
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
    return(
        <>
     <Appbar/>
<div className="border-b border-gray-50 mt-4 px-2 py-4 flex justify-end">
    <Link to={addForm}>
<button className="bg-black mr-6 text-white text-xs px-2 py-1 rounded-md transition duration-200">
 + {addBtn}
</button>
    </Link>
</div>

<div className=" overflow-x-auto px-3 mt-2 ">
<table className="min-w-full table-auto border-collapse ">
 <thead className="">
 <tr>
  {columns.map((column) => (
    <th key={column.key} className="px-4 py-2 text-left text-xs font-normal text-gray-400">
      {column.label}
    </th>
  ))}
</tr>

 </thead>
 <tbody>

 {
     data.map((row)=>(
        <tr key={row.id} className="bg-white border-b border-gray-50 cursor-pointer hover:bg-gray-100">
        <td className="px-4 py-2  text-xs text-black  ">{row.id} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.name} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.code} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.quantity} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.temperature} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.section} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.entryDate} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.expiryDate} </td>
        <td className="px-4 py-2  text-xs text-black  ">{row.supplier} </td>
       
        <td className="px-4 py-2 text-xs text-black  ">
            <Link to={editForm}>
   <button className="bg-black text-white text-xs  px-2 py-1 rounded-md  transition duration-200" onClick={()=>onEdit(row.id)}>
    Edit
   </button>
            </Link>
   
   </td>
        <td className="px-4 py-2 text-xs text-black  ">
   
   <button className="border  border-black  text-black text-xs px-2 py-1 rounded-md transition duration-1000"    onClick={() => handleDeleteClick(row.id)}>
    Delete
   </button>
   </td>
   
        
        
      </tr>
     
    ))
 }
        
 
 
 
 
 </tbody>
</table>
</div>
<DeleteConfirmationModal 
  isOpen={isModalOpen}
  onClose={handleModalClose}
  onConfirm={handleDeleteConfirm}
/>

        </>
    )
}
export default TableComponent;