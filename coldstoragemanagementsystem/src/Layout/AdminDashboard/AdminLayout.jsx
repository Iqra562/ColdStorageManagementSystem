import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
function AdminLayout(){
return(
    <>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
    </>
)
}
export default AdminLayout