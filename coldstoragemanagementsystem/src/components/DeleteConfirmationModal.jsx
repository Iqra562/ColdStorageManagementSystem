import React from "react";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-start  justify-center  z-50" onClick={onClose}>
      <div className="bg-white p-6 rounded-md shadow-md mt-16">
        {/* <h3 className="text-lg font-semibold text-gray-800 mb-4">Delete Inventory</h3> */}
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this inventory item?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="border  border-gray-500  text-black text-xs px-2 py-1 rounded-md transition duration-1000"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
          
            className="border  bg-red-700  text-white text-xs px-2 py-1 rounded-md transition duration-1000"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
