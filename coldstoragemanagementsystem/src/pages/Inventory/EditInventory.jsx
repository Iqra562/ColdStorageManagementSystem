import React from "react";
import Appbar from "../../components/Appbar";
function EditInventory(){
return(
    <>
    <Appbar/>
    <div className="px-6 mt-8">
        <div className="text-xl border-b  border-gray-100 pb-4">
            <h1 className="text-lg font-semibold">Update Inventory</h1>
        </div>
        <form action=" ">
            <div className="flex flex-col space-y-6">

            <div className="w-full flex">
            <input type="text" placeholder="Inventory Name" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="number" placeholder="Inventory Code" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="text" placeholder="Inventory Quantity" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="number" placeholder="Storage Temperature" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="number" placeholder="Storage Section Number" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="date" placeholder="Date of Entry" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="date" placeholder="Date of Expiration" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

            </div>
            <div className="w-full">
            <input type="text" placeholder="Supplier Name" class="text-sm py-0.5 px-6 text-gray-500  ring-1 ring-gray-300 focus:ring-1 focus:ring-gray-300  focus:outline-none w-full rounded-md placeholder:mr-5" />

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