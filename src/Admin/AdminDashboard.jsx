import React, { useState } from 'react'
import Home from '../components/Home'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const AdminDashboard = () => {

   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)  
      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }

  return (
    <div>
   <Header OpenSidebar={OpenSidebar}/>
   <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <div  className='grid-container'>
      <Home />
    </div>
    </div>
  )
}

export default AdminDashboard
