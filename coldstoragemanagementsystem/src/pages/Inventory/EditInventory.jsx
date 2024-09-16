import React from "react";
import Appbar from "../../components/Appbar";
function EditInventory(){
return(
    <>
    <Appbar/>
    <div className="px-6 mt-8">
  <div className="text-xl border-b border-gray-100 pb-4">
    <h1 className="text-lg font-semibold">Update Inventory</h1>
  </div>
  <form action="">
  <div className="flex flex-col space-y-6">
  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Inventory Name</label>
    <input
      type="text"
      placeholder="Inventory Name"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Inventory Code</label>
    <input
      type="number"
      placeholder="Inventory Code"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Inventory Quantity</label>
    <input
      type="text"
      placeholder="Inventory Quantity"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Storage Temperature</label>
    <input
      type="number"
      placeholder="Storage Temperature"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Storage Section Number</label>
    <input
      type="number"
      placeholder="Storage Section Number"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Date of Entry</label>
    <input
      type="date"
      placeholder="Date of Entry"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Date of Expiration</label>
    <input
      type="date"
      placeholder="Date of Expiration"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="flex items-center justify-between">
    <label className="text-sm text-gray-500">Supplier Name</label>
    <input
      type="text"
      placeholder="Supplier Name"
      className="w-10/12 text-sm py-0.5 px-6 text-gray-500 ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none rounded-md placeholder:mr-5"
    />
  </div>

  <div className="mt-6">
    <button className="bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-md">
      Update Inventory
    </button>
  </div>
</div>

  </form>
</div>

    </>
)
}
export default EditInventory;