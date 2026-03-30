import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 border-b border-white/10 py-4 bg-[#090A0F] transition-all duration-300 sticky top-0 z-50' >
      <Link to='/' >
        <img src={assets.logo} alt="Logo" className='h-8 md:h-9  opacity-90 hover:opacity-100 transition-opacity drop-shadow-md'/>
      </Link>

      <UserButton 
        appearance={{ 
          elements: { 
            avatarBox: "w-9 h-9 border-2 border-white/20 invert hover:border-cyan-500 transition-colors shadow-lg" 
          } 
        }}
      />
      
    </div>
  )
}

export default Navbar
