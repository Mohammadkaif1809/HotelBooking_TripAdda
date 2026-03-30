import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center px-6 md:px-24 bg-gradient-to-b from-[#090A0F] via-[#0D0F14] to-[#12141A] py-24'>
      <Title 
        title="Featured Destination" 
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences." 
      />
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-7xl'>
        {roomsDummyData.slice(0,4).map((room, idx) => (
          <HotelCard key={room._id} room={room} index={idx} />
        ))}
      </div>

      <button 
        onClick={() => {navigate('/rooms'); scrollTo(0,0) }} 
        className='mt-16 px-8 py-3 text-sm font-semibold tracking-wide border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5'
      >
        View All Destinations
      </button>
    </div>
  )
}

export default FeaturedDestination