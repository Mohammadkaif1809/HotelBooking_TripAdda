import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "150+", label: "Luxury Properties" },
    { number: "40", label: "Countries Worldwide" },
    { number: "24/7", label: "Private Concierge" },
    { number: "98%", label: "Guest Satisfaction" }
  ];

  return (
    <div className='bg-[#090A0F] min-h-screen text-white pt-28 md:pt-36 pb-20'>
      <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <p className='text-xs font-bold tracking-widest uppercase text-orange-400 mb-4'>
              Our Story
            </p>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight mb-6 leading-tight'>
              Redefining the Art of <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500'>Luxury Travel</span>
            </h1>
            <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-6'>
              Founded on the principle that travel should be frictionless and extraordinary, TripAdda curates the world's most exclusive properties for the discerning traveler.
            </p>
            <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-10'>
              We don't just book rooms; we engineer flawless experiences. From subterranean wine cellars in Tuscany to private overwater villas in the Maldives, our portfolio is strictly invitation-only.
            </p>
            <button 
              onClick={() => navigate('/rooms')}
              className='px-8 py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] tracking-wide'
            >
              Explore Collection
            </button>
          </div>

          <div className='lg:w-1/2 relative w-full h-[500px] md:h-[600px]'>
            <div className='absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10'>
             <img 
                 src="https://i.pinimg.com/736x/1e/86/ed/1e86ed37ca0ce2e5ec1fb23dd81326aa.jpg"
                alt="Luxury Resort" 
                className='w-full h-full object-cover' 
              />
            </div>
            <div className='absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20'>
              <img src="https://i.pinimg.com/736x/df/be/a0/dfbea061e189270b5488448c7f095dbd.jpg" alt="Interior" className='w-full h-full object-cover' />
            </div>
            <div className='absolute inset-0 bg-cyan-500/10 blur-[100px] -z-10 rounded-full'></div>
          </div>
        </div>
      </div>

      <div className='mt-32 bg-[#13161C] border-y border-white/5 py-16'>
        <div className='px-4 md:px-16 lg:px-24 xl:px-32'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5'>
            {stats.map((stat, idx) => (
              <div key={idx} className='flex flex-col items-center justify-center text-center px-4'>
                <p className='text-4xl md:text-5xl font-playfair font-bold text-white mb-2'>{stat.number}</p>
                <p className='text-xs md:text-sm font-medium text-gray-500 uppercase tracking-widest'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='px-4 md:px-16 lg:px-24 xl:px-32 mt-32 text-center'>
        <h2 className='text-3xl md:text-4xl font-playfair font-bold mb-6'>Join the Inner Circle</h2>
        <p className='text-gray-400 max-w-2xl mx-auto mb-10'>
          Become a member to access unlisted properties, priority bookings, and complimentary upgrades.
        </p>
        <button 
          onClick={() => navigate('/owner')}
          className='px-8 py-3.5 bg-transparent border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all tracking-wide'
        >
          Become a Member
        </button>
      </div>
    </div>
  )
}

export default About