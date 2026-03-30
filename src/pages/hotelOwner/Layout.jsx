import React from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    // Added the dark background and white text here
    <div className='flex flex-col h-screen bg-[#090A0F] text-white'>
      <Navbar/>
      
      {/* Added overflow-hidden to prevent double scrollbars */}
      <div className='flex h-full overflow-hidden'>
        <Sidebar/>
        
        {/* Added overflow-y-auto so ONLY the content area scrolls */}
        <div className='flex-1 p-4 pt-10 md:px-10 h-full overflow-y-auto bg-[#090A0F] custom-scrollbar'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout