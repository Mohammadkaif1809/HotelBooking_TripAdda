import React, { useState, useEffect } from 'react';
import { assets, cities, heroBgs } from '../assets/assets';

const Hero = () => {
  
  // ADDED: Logic to pick a random background from your array on component load
  const [currentBg] = useState(() => {
    const randomIndex = Math.floor(Math.random() * heroBgs.length);
    return heroBgs[randomIndex];
  });

  const [popupData, setPopupData] = useState({ show: false, isAvailable: false });

  const handleSearch = (e) => {
    e.preventDefault(); // This will now perfectly stop the page refresh
    const isAvailable = Math.random() > 0.5;
    
    setPopupData({ show: true, isAvailable });
  };

  useEffect(() => {
    if (popupData.show) {
      const timer = setTimeout(() => {
        setPopupData((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupData.show]);

  return (
    <div
      // UPDATED: Now uses the randomly selected image from your heroBgs array
      style={{ backgroundImage: `url(${currentBg})` }}
      className='relative flex flex-col items-center md:items-start justify-center px-6 md:px-16 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen w-full transition-all duration-700'
    >
  
      <div 
        className={`fixed top-12 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          popupData.show ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-10 invisible"
        }`}
      >
        <p className={`${
          popupData.isAvailable ? "bg-green-500" : "bg-red-500"
        } text-white rounded-full px-8 py-3 shadow-2xl font-bold tracking-wide border border-white/20 backdrop-blur-md`}>
          {popupData.isAvailable ? "Available" : "Not Available"}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-0 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left w-full mt-20">
        <p className='bg-white/20 backdrop-blur-md border border-white/30 px-5 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase shadow-lg'>
          The Ultimate Hotel Experience
        </p>

        <h2 className='font-playfair text-4xl md:text-[64px] md:leading-[1.1] font-bold md:font-extrabold max-w-2xl mt-6 drop-shadow-lg'>
          Discover Your Perfect <br className="hidden md:block" /> Getaway Destination
        </h2>

        <p className='max-w-xl mt-6 text-base md:text-lg text-gray-200 font-light drop-shadow-md leading-relaxed'>
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        {/* FIX: onSubmit handles the form submission natively */}
        <form onSubmit={handleSearch} className='bg-white/95 backdrop-blur-xl text-gray-800 rounded-2xl md:rounded-full px-6 py-4 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-5xl shadow-2xl border border-white/40 transition-all duration-500 hover:shadow-cyan-500/10'>
          
          {/* Destination */}
          <div className='flex flex-col w-full md:w-auto flex-1 px-2'>
            <div className='flex items-center gap-2 text-gray-500 font-medium mb-1'>
              <img src={assets.calenderIcon} alt="calanderIcon" className='h-4 opacity-70'/>
              <label htmlFor="destinationInput" className="text-xs uppercase tracking-wider">Destination</label>
            </div>
            <input 
              list='destinations' 
              id="destinationInput" 
              type="text" 
              className="w-full bg-transparent text-gray-900 font-semibold placeholder-gray-400 outline-none truncate" 
              placeholder="Where are you going?" 
              required 
            />
            <datalist id='destinations'>
              {cities && cities.map((city, idx) => (
                <option value={city} key={idx}/>
              ))}
            </datalist>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gray-100"></div>

          {/* Check In */}
          <div className='flex flex-col w-full md:w-auto flex-1 px-2'>
            <div className='flex items-center gap-2 text-gray-500 font-medium mb-1'>
              <img src={assets.calenderIcon} alt="calanderIcon" className='h-4 opacity-70'/>
              <label htmlFor="checkIn" className="text-xs uppercase tracking-wider">Check in</label>
            </div>
            <input 
              id="checkIn" 
              type="date" 
              className="w-full text-gray-900 font-semibold cursor-pointer outline-none bg-transparent"
              required
            />
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gray-300"></div>

          {/* Check Out */}
          <div className='flex flex-col w-full md:w-auto flex-1 px-2'>
            <div className='flex items-center gap-2 text-gray-500 font-medium mb-1'>
              <img src={assets.calenderIcon} alt="calanderIcon" className='h-4 opacity-70'/>
              <label htmlFor="checkOut" className="text-xs uppercase tracking-wider">Check out</label>
            </div>
            <input 
              id="checkOut" 
              type="date" 
              className="w-full text-gray-900 font-semibold outline-none cursor-pointer bg-transparent" 
              required
            />
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-gray-300"></div>

          {/* Guests */}
          <div className='flex flex-col w-full md:w-auto px-2'>
            <label htmlFor="guests" className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1 text-center md:text-left">Guests</label>
            <input 
              min={1} max={4} 
              id="guests" 
              type="number" 
              className="w-full md:max-w-16 bg-transparent text-gray-900 font-semibold outline-none text-center md:text-left" 
              placeholder="1" 
            />
          </div>

          {/* FIX: Button is now type="submit" and handles NO events directly */}
          <button type='submit' className='group flex items-center justify-center gap-2 rounded-full bg-black hover:bg-gray-800 py-3.5 px-8 text-white font-medium cursor-pointer w-full md:w-auto transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5'>
            <img src={assets.searchIcon} alt="searchIcon" className='h-5 group-hover:scale-110 transition-transform duration-300'/>
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero;