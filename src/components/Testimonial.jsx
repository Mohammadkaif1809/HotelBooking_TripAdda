import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#090A0F] to-[#0D0F14] pt-24 pb-32'>
      <Title 
        title="What Our Guests Say" 
        subTitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="group bg-[#1A1D24] p-8 rounded-2xl shadow-lg border border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col"
          >
            <div className="flex items-center gap-4">
              <img 
                className="w-14 h-14 rounded-full object-cover ring-4 ring-black/40" 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div>
                <p className="font-playfair font-semibold text-xl text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400 mt-0.5">{testimonial.address}</p>
              </div>
            </div>
            
            
            <div className="flex items-center gap-1 mt-6 bg-black/40 border border-white/5 w-max px-3 py-1.5 rounded-full">
              <StarRating />
            </div>
            
            <p className="text-gray-300 mt-5 leading-relaxed italic flex-1">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial