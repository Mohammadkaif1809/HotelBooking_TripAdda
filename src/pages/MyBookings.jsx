import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

  const [bookings,setBookings] = useState(userBookingsDummyData)

  return (
    // Applied dark background (#090A0F) and white text
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-24 lg:px-24 xl:px-32 bg-[#090A0F] min-h-screen text-white'>
      <Title title="My Bookings" subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks" align="left"/>

      {/* Changed text-gray-800 to text-gray-300 for the header */}
      <div className='max-w-6xl mt-8 w-full text-gray-300'>
        {/* Changed border-gray-300 to border-white/10 */}
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-white/10 font-medium text-base py-3'>
          <div>Hotels</div>
          <div>Date & Time</div>
          <div>Payment</div>
        </div>
      </div>
      
      {bookings.map((booking) => (
        // Changed border-gray-300 to border-white/10
        <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1.6fr] w-full border-b border-white/10 py-6 first:border-t first:border-white/10'>
          
          {/* hotel */}
          <div className='flex flex-col md:flex-row'>
              <img src={booking.room.images[0]} alt='hotel img' className='min-md:w-44 rounded-lg shadow-lg border border-white/10 object-cover' />
              <div className='flex flex-col gap-1.5 max-md:mt-3 md:ml-4'>
                <p className='font-playfair text-2xl'>{booking.hotel.name}  
                  <span className='font-inter text-sm text-gray-400'> ({booking.room.roomType})</span>
                </p>

                {/* Added invert and opacity to icons, changed text-gray-500 to text-gray-400 */}
                <div className='flex items-center gap-1.5 text-sm text-gray-400 mt-1'>
                  <img src={assets.locationIcon} alt="locationIcon" className="w-4 h-4 invert opacity-60" />
                  <span>{booking.hotel.address}</span>
                </div>

                 <div className='flex items-center gap-1.5 text-sm text-gray-400'>
                  <img src={assets.guestsIcon} alt="guests-Icon" className="w-4 h-4 invert opacity-60" />
                  <span>Guests: {booking.guests}</span>
                </div>

                <p className='text-base font-medium mt-1 text-gray-200'>Total: ₹{booking.totalPrice} </p>
              </div>
          </div>

          {/* date and time */}
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-8 mt-3'>
            <div>
              <p className='text-gray-300'>Check-In : </p>
              {/* Changed text-gray-500 to text-gray-400 */}
              <p className='text-gray-400 text-sm font-medium'> 
                {new Date(booking.checkInDate).toDateString()}
              </p>
            </div>
            
           <div>
              <p className='text-gray-300'>Check-Out : </p>
              {/* Changed text-gray-500 to text-gray-400 */}
              <p className='text-gray-400 text-sm font-medium'> 
                {new Date(booking.checkOutDate).toDateString()}
              </p>
            </div>
          </div>

          {/* payment check */}
          <div className='flex flex-col items-start justify-center pt-3'>
            <div className='flex items-center gap-2'>
              <div className={`h-3 w-3 rounded-full shadow-lg ${booking.isPaid ? "bg-green-500 shadow-green-500/40" : "bg-red-500 shadow-red-500/40"}`}></div>
              <p className={`text-sm font-medium tracking-wide uppercase ${booking.isPaid ? "text-green-400" : "text-red-400"}`}>
                {booking.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>
            
            {!booking.isPaid && (
              // Updated button to match dark mode UI
              <button className='px-6 py-2 mt-4 text-xs font-bold tracking-wider uppercase border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'>
                Pay Now
              </button>
            )}
          </div>

        </div>
      ))}
    </div>
  )
}

export default MyBookings