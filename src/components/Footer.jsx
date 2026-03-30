import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-[#090A0F] pt-16 px-6 md:px-16 lg:px-24 xl:px-32 border-t border-white/5'>
      <div className='flex flex-wrap justify-between gap-12 md:gap-8'>
        
        {/* Brand Column */}
        <div className='max-w-xs'>
          {/* Note: Ensure your logo is inverted/white for dark mode! */}
          <img src={assets.logo} alt="logo" className='mb-6 h-8 md:h-9 opacity-90' />
          <p className='text-sm text-gray-400 leading-relaxed'>
            Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
          </p>
          <div className='flex items-center gap-4 mt-8'>
            <img src={assets.instagramIcon} alt="insta" className='w-5 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'/>
            <img src={assets.facebookIcon} alt="facebook" className='w-5  hover:opacity-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'/>
            <img src={assets.twitterIcon} alt="X" className='w-5   hover:opacity-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'/>
            <img src={assets.linkendinIcon} alt="linkedIn" className='w-5   hover:opacity-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer'/>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className='font-playfair font-semibold text-lg text-white tracking-wide'>COMPANY</p>
          <ul className='mt-5 flex flex-col gap-3 text-sm text-gray-400 font-medium'>
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <p className='font-playfair font-semibold text-lg text-white tracking-wide'>SUPPORT</p>
          <ul className='mt-5 flex flex-col gap-3 text-sm text-gray-400 font-medium'>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Safety Information</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cancellation Options</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
          </ul>
        </div>

        {/* Mini Newsletter */}
        <div className='max-w-xs'>
          <p className='font-playfair font-semibold text-lg text-white tracking-wide'>STAY UPDATED</p>
          <p className='mt-5 text-sm text-gray-400 leading-relaxed'>
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          
          <div className='flex items-center mt-6 bg-white/5 border border-white/10 rounded-full p-1 focus-within:border-white/30 transition-all duration-300'>
            <input 
              type="text" 
              className='bg-transparent h-9 px-4 w-full outline-none text-sm text-white placeholder-gray-500' 
              placeholder='Your email' 
            />
            <button className='group flex items-center justify-center bg-white h-9 w-10 shrink-0 rounded-full hover:bg-gray-200 transition-colors'>
              <img src={assets.arrowIcon} alt="arrowIcon" className='w-3.5 group-hover:translate-x-0.5 transition-transform' />
            </button>
          </div>
        </div>
        
      </div>

      {/* Bottom Bar */}
      <hr className='border-white/10 mt-16' />
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between py-8 text-sm text-gray-500 font-medium'>
        <p>© {new Date().getFullYear()} <a href="https://portfolio-two-rho-rp7j18ncoa.vercel.app/" className="hover:text-white transition-colors">Mohammad Kaif.</a> All rights reserved.</p>
        <ul className='flex items-center gap-6'>
          <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer