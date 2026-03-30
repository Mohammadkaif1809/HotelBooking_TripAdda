import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-24 bg-gradient-to-b from-[#12141A] to-[#090A0F]'>
      
      {/* Header Section */}
      <div className='flex flex-col md:flex-row md:items-end justify-between w-full mb-12'>
        <Title 
          title="Exclusive Offers" 
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories." 
          align="left"  
        />
        <button className='group flex items-center font-semibold text-gray-300 cursor-pointer max-md:mt-8 gap-2 hover:text-white transition-colors'>
          View All Offers
          <img className='invert group-hover:translate-x-1.5 transition-transform duration-300 w-5 opacity-80' src={assets.arrowIcon} alt="arrowIcon" />
        </button>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {exclusiveOffers.map((item) => (
          <div 
            key={item._id} 
            className='group relative flex flex-col items-start justify-end gap-2 pt-36 px-6 pb-6 rounded-2xl text-white overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-500 min-h-[320px] cursor-pointer border border-white/5'
          >
            {/* Background Image with Zoom */}
            <div 
              className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110" 
              style={{backgroundImage : `url(${item.image})`}}
            ></div>
            
            {/* Deep Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className='inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-wider bg-black/40 backdrop-blur-md border border-white/10 text-white font-bold rounded-full shadow-sm'>
                {item.priceOff}% OFF
              </p>
              
              <h3 className='text-2xl font-semibold font-playfair mb-2 tracking-wide'>{item.title}</h3>
              <p className='text-sm text-gray-300 font-light leading-relaxed line-clamp-2'>{item.description}</p>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <p className='text-xs font-medium text-gray-400 tracking-wide'>Expires {item.expiryDate}</p>
                <button className='flex items-center font-medium text-sm gap-2 text-white hover:text-cyan-400 transition-colors'>
                  View Offer
                  <img className='invert w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' src={assets.arrowIcon} alt="arrowIcon" />
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers