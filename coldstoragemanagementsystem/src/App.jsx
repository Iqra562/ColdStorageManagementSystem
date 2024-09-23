import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiniDrawer from './components/sidebarerror.jsx'
import Sidebar from './components/sidebar.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminLayout from './Layout/AdminDashboard/AdminLayout.jsx'
import Home from './pages/Home.jsx'
import Inventory from './pages/Inventory/Inventory.jsx'
import AddInventory from './pages/Inventory/AddInventory.jsx'
import EditInventory from './pages/Inventory/EditInventory.jsx'
import DeleteConfirmationModal from './components/DeleteConfirmationModal.jsx'
import Login from './pages/login.jsx'
import Suplier from './pages/Manager Suplier/Suplier.jsx';
import AddSuplier from './pages/Manager Suplier/AddSuplier.jsx';
import EditSuplier from './pages/Manager Suplier/EditSuplier.jsx';
import Storage from './pages/Manage Storage/Storage.jsx'
import AddStorage from './pages/Manage Storage/AddStorage.jsx'
import EditStorage from './pages/Manage Storage/EditStorage.jsx'

function App() {
  return (
    
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<AdminLayout/>}>
    <Route index  element={<Home/>}/>
    <Route path='/inventory' element={<Inventory/>}/>
    <Route path='/addinventory' element={<AddInventory/>}/>
    <Route path='/editinventory' element={<EditInventory/>}/>
    <Route path='/suplier' element={<Suplier/>}/>
    <Route path='/addSuplier' element={<AddSuplier/>}/>
    <Route path='/editSuplier' element={<EditSuplier/>}/>
    <Route path='/storage' element={<Storage/>}/>
    <Route path='/addStorage' element={<AddStorage/>}/>
    <Route path='/editStorage' element={<EditStorage/>}/>
   
  </Route>
    <Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App;
