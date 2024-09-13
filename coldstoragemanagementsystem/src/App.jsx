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
  </Route>
</Routes>
</BrowserRouter>
   
    </>
  )
}

export default App
