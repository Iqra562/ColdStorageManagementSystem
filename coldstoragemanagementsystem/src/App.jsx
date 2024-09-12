import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiniDrawer from './components/sidebarerror.jsx'
import Sidebar from './components/sidebar.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminLayout from './Layout/AdminDashboard/AdminLayout.jsx'
import Home from './pages/Home.jsx'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<AdminLayout/>}>
    <Route index  element={<Home/>}/>
  </Route>
</Routes>
</BrowserRouter>
   
    </>
  )
}

export default App
