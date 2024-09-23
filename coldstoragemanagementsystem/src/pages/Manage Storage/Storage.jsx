import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import avatar from "../../assets/images/avatar.jpg"
import TableComponent from "../../components/TableComponent";


function Inventory() {
  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "Storage Name" },
    { key: "code", label: "Storage Code" },
    { key: "quantity", label: "Quantity" },
    { key: "temperature", label: "Storage Temperature" },
    { key: "section", label: "Storage Section Number" },
    { key: "entryDate", label: "Date of Entry" },
    { key: "expiryDate", label: "Expiration Date" },
    { key: "supplier", label: "Supplier Name" },
    { key: "edit", label: "Edit" },
    { key: "delete", label: "Delete" },
  ];

  const data = [
    {
      id: 1,
      name: "ABC",
      code: "#111",
      quantity: "222222",
      temperature: "0c",
      section: "000000090",
      entryDate: "1-1-111",
      expiryDate: "1-1-111",
      supplier: "John Doe",
    },
    {
      id: 2,
      name: "DEF",
      code: "#112",
      quantity: "333333",
      temperature: "2c",
      section: "000000091",
      entryDate: "2-2-222",
      expiryDate: "2-2-222",
      supplier: "Jane Smith",
    },
    {
      id: 3,
      name: "GHI",
      code: "#113",
      quantity: "444444",
      temperature: "5c",
      section: "000000092",
      entryDate: "3-3-333",
      expiryDate: "3-3-333",
      supplier: "Mike Johnson",
    },
    {
      id: 4,
      name: "JKL",
      code: "#114",
      quantity: "555555",
      temperature: "3c",
      section: "000000093",
      entryDate: "4-4-444",
      expiryDate: "4-4-444",
      supplier: "Sarah Lee",
    },
  ];
    const handleEdit = (id) => {
      console.log(` item  id: ${id}`);
    };
  
    const handleDelete = (id) => {
      console.log(` item  id: ${id}`);
    };
  
  return <TableComponent columns={columns} data={data} onEdit={handleEdit} onDelete = {handleDelete} addForm="/addstorage"  editForm="/editstorage" addBtn="Add Storage" />;
}

export default Inventory;
