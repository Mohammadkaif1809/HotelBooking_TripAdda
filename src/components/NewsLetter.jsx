import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
  return (
    <div className="bg-[#090A0F] py-16 w-full flex justify-center border-t border-white/5">
      <div className="relative overflow-hidden flex flex-col items-center max-w-5xl w-full rounded-2xl px-6 py-16 md:py-20 mx-4 lg:mx-auto bg-[#13161C] text-white shadow-2xl border border-white/5">
        
        {/* Sleek, subtle top highlight instead of a messy blur */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center w-full [&_h1]:text-white [&_p]:text-gray-400">
          <Title 
            title="Stay Inspired" 
            subTitle="Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration." 
          />
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-lg">
            {/* Input field looks "inset" into the card using the darker background */}
            <input 
              type="email" 
              className="bg-[#090A0F] border border-white/10 focus:border-white/30 rounded-full px-6 py-3.5 outline-none w-full transition-all text-white placeholder-gray-500 font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]" 
              placeholder="Enter your email address" 
            />
            <button className="flex items-center justify-center gap-2 group bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 active:scale-95 transition-all w-full sm:w-auto shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Subscribe
              <img src={assets.arrowIcon} alt="ArrowIcon" className='w-4 group-hover:translate-x-1.5 transition-transform duration-300' />
            </button>
          </div>
          
          <p className="text-gray-500 mt-6 text-xs text-center font-medium tracking-wide">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter