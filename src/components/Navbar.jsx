import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets"
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const BookIcon = () => (
  <svg className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
  </svg>
)

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/rooms' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk()
  const { user } = useUser()

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true)
      return;
    } else {
      setIsScrolled(false)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (

    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ease-in-out z-50 ${isScrolled ? "bg-[#090A0F]/85 shadow-lg shadow-black/50 backdrop-blur-xl py-4 border-b border-white/5" : "py-6 bg-gradient-to-b from-black/70 via-black/30 to-transparent"}`}>

      
      <Link to="/" className="group">
        <img src={assets.logo} alt="logo" className={`h-8 md:h-10 transition-all duration-300 opacity-90 group-hover:opacity-100 drop-shadow-md`} />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map((link, i) => (
          <a key={i} href={link.path} className={`group relative font-medium tracking-wide text-md transition-colors duration-300 text-gray-200 hover:text-cyan-400`}>
            {link.name}
            {/* Cyan underline animation */}
            <span className={`absolute -bottom-1.5 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 ease-out bg-cyan-400`}></span>
          </a>
        ))}
        
        {/* Dashboard Button */}
      {user && <button 
        className={`border px-5 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all duration-300 hover:scale-105 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm`} 
        onClick={() => navigate('/owner')}
      >
        Dashboard
      </button>}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-5">
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
          <img src={assets.searchIcon} alt="searchIcon" className={` opacity-80 hover:opacity-100 h-7 transition-all duration-500`} />
        </button>

        {user ?
          (<UserButton appearance={{ elements: { avatarBox: "w-10 h-10 border-2 border-white/20 shadow-sm transition-transform hover:scale-105" } }}>
            <UserButton.MenuItems>
              <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate("/my-bookings")} />
            </UserButton.MenuItems>
          </UserButton>)
          :
          
          (<button 
            onClick={openSignIn} 
            className={`px-6 py-2.5 text-sm font-semibold rounded-full ml-2 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transform hover:-translate-y-0.5 bg-white text-black hover:bg-gray-200`}
          >
            Login
          </button>)
        }
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 md:hidden">
        {user && <UserButton appearance={{ elements: { avatarBox: "w-9 h-9 border-2 border-white/20" } }}>
          <UserButton.MenuItems>
            <UserButton.Action label='My Bookings' labelIcon={<BookIcon />} onClick={() => navigate("/my-bookings")} />
          </UserButton.MenuItems>
        </UserButton>}

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors">
          <img src={assets.menuIcon} alt="menuIcon" className={`opacity-90 h-5 transition-all duration-300`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMenuOpen(false)}></div>

      {/* Mobile Menu Sidebar - ✨ Upgraded to Dark Mode */}
      <div className={`fixed top-0 right-0 w-64 h-screen bg-[#0D0F14] border-l border-white/10 shadow-2xl z-50 flex flex-col pt-20 px-6 gap-6 font-medium text-white transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>
          <img src={assets.closeIcon} alt="closeIcon" className='h-5 invert opacity-70 hover:opacity-100 transition-opacity' />
        </button>

        <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
          {navLinks.map((link, i) => (
            <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {user && <button className="border border-white/20 bg-white/5 px-4 py-2.5 text-base font-medium rounded-xl hover:bg-white/10 transition-all text-white" onClick={() => navigate('/owner')}>
            Dashboard
          </button>}

          {!user && <button onClick={openSignIn} className="bg-white text-black px-8 py-3 rounded-xl hover:bg-gray-200 transition-all shadow-md font-semibold">
            Login
          </button>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;