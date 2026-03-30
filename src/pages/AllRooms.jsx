import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from "../assets/assets"
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating"

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-3 text-sm group'>
      <input 
        type="checkbox" 
        checked={selected} 
        onChange={(e) => onChange(e.target.checked, label)} 
        className='w-4 h-4 cursor-pointer accent-cyan-500 bg-white/10 border-white/20 rounded transition-all'
      />
      <span className='font-medium text-gray-400 group-hover:text-white select-none transition-colors'>{label}</span>
    </label>
  )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-3 text-sm group'>
      <input 
        type="radio" 
        name='sortOption' 
        checked={selected} 
        onChange={() => onChange(label)} 
        className='w-4 h-4 cursor-pointer accent-cyan-500 bg-white/10 border-white/20 transition-all'
      />
      <span className='font-medium text-gray-400 group-hover:text-white select-none transition-colors'>{label}</span>
    </label>
  )
}

const AllRooms = () => {

  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false)

  const roomTypes = [
    "Single bed", "Double Bed", "Luxury Room", "Family Suite",
  ];
  const priceRanges = [
    "0 to 499", "500 to 999", "1000 to 1999", "2000 to 3499",
  ];
  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  return (
    // Swapped basic background for deep midnight gradient
    <div className='flex flex-col lg:flex-row items-start justify-between gap-10 pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-[#090A0F] to-[#12141A] min-h-screen pb-20'>

      {/* Main Content Area */}
      <div className='w-full lg:flex-1'>

        {/* Header Title */}
        <div className='flex flex-col items-start text-left mb-10'>
          <h1 className='font-playfair font-bold text-4xl md:text-5xl text-white tracking-tight'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-400 mt-3 max-w-2xl leading-relaxed'>
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Room List */}
        <div className="flex flex-col gap-6">
          {roomsDummyData.map((room) => (
            <div 
              key={room._id} 
              // Dark mode card styling
              className='group flex flex-col md:flex-row items-stretch bg-[#1A1D24] rounded-2xl p-4 gap-6 border border-white/5 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-white/10 transition-all duration-300 ease-out'
            >
              {/* Image Container */}
              <div className="md:w-[40%] overflow-hidden rounded-xl relative shrink-0">
                <img 
                  onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }} 
                  src={room.images[0]} 
                  alt={room.hotel.name} 
                  title='View Room Details' 
                  className='w-full h-full object-cover aspect-[4/3] md:aspect-auto cursor-pointer group-hover:scale-105 transition-transform duration-700 ease-in-out' 
                />
              </div>

              {/* Info Container */}
              <div className='flex flex-col flex-1 py-2 pr-2 justify-between'>
                
                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className='text-xs font-bold uppercase tracking-wider text-cyan-500'>{room.hotel.city}</p>
                    <div className='flex items-center bg-white/5 border border-white/10 px-2 py-1 rounded-md'>
                      <StarRating />
                      <p className='ml-2 text-xs font-semibold text-gray-300'>200+ reviews</p>
                    </div>
                  </div>
                  
                  <h2 
                    onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }} 
                    className='text-white text-2xl md:text-3xl font-playfair font-semibold cursor-pointer hover:text-cyan-400 transition-colors mt-1 mb-2'
                  >
                    {room.hotel.name}
                  </h2>
                  
                  <div className='flex gap-1.5 items-center text-gray-400 text-sm'>
                    <img className='w-4 h-4 opacity-50 invert' src={assets.locationIcon} alt="locationIcon" />
                    <span className="truncate">{room.hotel.address}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className='flex flex-wrap items-center mt-6 mb-6 gap-2'>
                  {room.amenities.map((item, idx) => (
                    <div key={idx} className='flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 border border-white/5'>
                      <img className='w-3.5 h-3.5 opacity-70 invert' src={facilityIcons[item]} alt={item} />
                      <p className='text-[11px] font-semibold text-gray-300 uppercase tracking-wide'>{item}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom Price & Button */}
                <div className='flex items-center justify-between mt-auto pt-4 border-t border-white/5'>
                  <div>
                    <p className='text-sm text-gray-400 font-medium'>Starting from</p>
                    <p className='text-2xl font-bold text-white tracking-tight'>₹ {room.pricePerNight} <span className="text-sm font-medium text-gray-500 font-sans">/ night</span></p>
                  </div>
                  <button 
                    onClick={() => { navigate(`/rooms/${room._id}`); scrollTo(0, 0) }}
                    className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    View Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Filter Sidebar - Sticky & Dark Glass */}
      <div className='w-full lg:w-[320px] shrink-0 lg:sticky lg:top-32'>
        <div className='bg-[#13161C]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden'>

          <div className={`flex items-center justify-between px-6 py-4 bg-white/5 ${openFilter ? "border-b border-white/5" : "lg:border-b lg:border-white/5"} `}>
            <p className='text-sm font-bold tracking-widest text-white'>FILTERS</p>
            <div className='text-xs font-bold tracking-wider cursor-pointer text-cyan-400 hover:text-cyan-300 transition-colors'>
              <span onClick={() => setOpenFilter(!openFilter)} className='lg:hidden'>{openFilter ? 'HIDE' : 'SHOW'}</span>
              <span className='hidden lg:block'>CLEAR ALL</span>
            </div>
          </div>

          <div className={`${openFilter ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-[1000px] lg:opacity-100'} overflow-hidden transition-all duration-500 ease-in-out`}>
            
            <div className='px-6 py-5 border-b border-white/5'>
              <p className='text-sm font-bold text-white mb-3 uppercase tracking-wide'>Room Type</p>
              <div className="flex flex-col gap-1">
                {roomTypes.map((room, idx) => (
                  <CheckBox key={idx} label={room} />
                ))}
              </div>
            </div>
            
            <div className='px-6 py-5 border-b border-white/5'>
              <p className='text-sm font-bold text-white mb-3 uppercase tracking-wide'>Price Range</p>
              <div className="flex flex-col gap-1">
                {priceRanges.map((range, idx) => (
                  <CheckBox key={idx} label={`₹ ${range}`} />
                ))}
              </div>
            </div>
            
            <div className='px-6 py-5 bg-black/20'>
              <p className='text-sm font-bold text-white mb-3 uppercase tracking-wide'>Sort By</p>
              <div className="flex flex-col gap-1">
                {sortOptions.map((option, idx) => (
                  <RadioButton key={idx} label={option} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AllRooms