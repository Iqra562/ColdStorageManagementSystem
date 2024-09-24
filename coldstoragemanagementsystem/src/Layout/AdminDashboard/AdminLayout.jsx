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
        className={`fixed top-0 left-0 h-full bg-gray-900  transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar  closeSidebar={closeSidebar}/>
      </div>
      <div className="flex-1 overflow-y-auto ml-0 transition-margin duration-300" style={{ marginLeft: isSidebarOpen ? '220px' : '0' }}>
        <Appbar openSidebar={openSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
