import React, { useState } from 'react'
import HeaderPage from './header'
import SideBarPage from './sideBar'
import HomePage from './home'


function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
      <HeaderPage OpenSidebar = {OpenSidebar} />
      <SideBarPage openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <HomePage />

      </div>
  )
}

export default Dashboard