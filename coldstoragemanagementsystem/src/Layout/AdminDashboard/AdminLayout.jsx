import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Appbar from "../../components/Appbar";

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed lg:relative   z-10  top-0 left-0 h-full w-full lg:w-auto bg-black bg-opacity-50  transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={ closeSidebar}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
      </div>
      <div 
       className="flex-1 overflow-y-auto "
        // style={{ marginLeft: isSidebarOpen ? '220px' : '0' }}
      >
        <Appbar openSidebar={openSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
