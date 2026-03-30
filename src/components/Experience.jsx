import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Holistic Wellness Spa",
      desc: "Rejuvenate your mind and body with our award-winning therapists and organic treatments.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop",
      tag: "Wellness"
    },
    {
      id: 2,
      title: "Michelin-Star Dining",
      desc: "Savor exquisite culinary masterpieces prepared by world-renowned executive chefs.",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
      tag: "Culinary"
    },
    {
      id: 3,
      title: "Private Yacht Charters",
      desc: "Explore hidden coves and pristine waters on our fleet of luxury private yachts.",
      img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1474&auto=format&fit=crop",
      tag: "Adventure"
    },
    {
      id: 4,
      title: "Exclusive Wine Tasting",
      desc: "Journey through our subterranean cellars featuring rare vintages from across the globe.",
      img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1470&auto=format&fit=crop",
      tag: "Tasting"
    },
    {
      id: 5,
      title: "Guided Cultural Tours",
      desc: "Immerse yourself in local heritage with our expert private concierges and guides.",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1374&auto=format&fit=crop",
      tag: "Culture"
    },
    {
      id: 6,
      title: "Sunset Helicopter Rides",
      desc: "Witness breathtaking aerial views of the coastline during the golden hour.",
      // UPDATED: Fresh, working Unsplash link for a beautiful aerial sunset
      img: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1472&auto=format&fit=crop",
      tag: "Aerial"
    }
  ];

  return (
    <div className='pt-28 md:pt-36 pb-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#090A0F] min-h-screen text-white'>
      <div className='flex flex-col items-center text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-playfair font-bold tracking-tight mb-4'>Curated Experiences</h1>
        <p className='text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed'>
          Beyond extraordinary stays, we offer unforgettable moments. Discover handpicked activities designed to elevate your journey and create lifelong memories.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {experiences.map((exp) => (
          <div key={exp.id} className='group relative w-full h-[400px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-lg hover:shadow-cyan-500/10 transition-all duration-500'>
            <div 
              className='absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110'
              style={{ backgroundImage: `url(${exp.img})` }}
            ></div>
            <div className='absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500'></div>
            
            <div className='absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2'>
              <p className='text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-2'>{exp.tag}</p>
              <h3 className='text-2xl font-playfair font-semibold text-white mb-2'>{exp.title}</h3>
              <p className='text-sm text-gray-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                {exp.desc}
              </p>
              <div className='mt-4 w-10 h-1 bg-cyan-500/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-left'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience