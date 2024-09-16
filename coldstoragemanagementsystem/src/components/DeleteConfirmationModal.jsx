import React from "react";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Delete Inventory</h3>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this inventory item?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
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
