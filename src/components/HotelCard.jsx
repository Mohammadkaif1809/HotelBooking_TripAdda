import React from 'react';
import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const HotelCard = ({room, index}) => {
  return (
    <Link 
      to={"./rooms/" + room._id} 
      onClick={() => scrollTo(0,0)} 
      key={room._id} 
      className='group relative w-full rounded-2xl overflow-hidden bg-[#1A1D24] text-gray-400 border border-white/5 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 ease-out hover:-translate-y-1.5 flex flex-col'
    >
      {/* Image Container */}
      <div className='relative w-full aspect-[4/3] overflow-hidden'>
        <img 
          src={room.images[0]} 
          alt={room.hotel.name} 
          className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110' 
        />
        {/* Dark Glassmorphism Badge */}
        {index % 2 === 0 && (
          <p className='px-3.5 py-1.5 absolute top-4 left-4 text-[10px] uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white font-bold rounded-full shadow-sm'>
            Best Seller
          </p>
        )}
      </div>

      <div className='p-5 flex flex-col flex-1'>
        <div className='flex items-start justify-between gap-2'>
          <p className='font-playfair text-xl font-semibold text-white line-clamp-1'>{room.hotel.name}</p>
          <div className='flex items-center gap-1 bg-black/40 border border-white/5 px-2 py-1 rounded-md'>
            <img src={assets.starIconFilled} alt="StarIcon" className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold text-white">4.5</span>
          </div>
        </div>

        <div className='flex items-center gap-1.5 text-sm mt-2.5 text-gray-400'>
          <img src={assets.locationIcon} alt="locationIcon" className="w-4 h-4 opacity-50 invert" />
          <span className="truncate">{room.hotel.address}</span>
        </div>

        <div className='flex items-end justify-between mt-auto pt-6'>
          <p className='text-sm text-gray-500'>
            <span className='text-xl font-bold text-white'>₹ {room.pricePerNight}</span> /night
          </p>
          <button className='px-5 py-2 text-sm font-medium border border-white/20 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-all duration-300'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard