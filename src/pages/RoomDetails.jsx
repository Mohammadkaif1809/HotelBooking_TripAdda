import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, hotelDummyData, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

    const [popupData, setPopupData] = useState({ show: false, isAvailable: false });
  
    const handleSearch = (e) => {
      
      e.preventDefault();

      const isAvailable = Math.random() > 0.5;
      
      setPopupData({ show: true, isAvailable});
    };
  
    useEffect(() => {
      if (popupData.show) {
        const timer = setTimeout(() => {
          setPopupData((prev) => ({ ...prev, show: false }));
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [popupData.show]);

  const {id} = useParams();
  const [room,setRoom] = useState(null);
  const [mainImg,setMainImg] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find((room)=>room._id == id)
    room && setRoom(room)
    room && setMainImg(room.images[0])
  }, [id])

  return room && (
    <div className='pt-28 md:pt-36 pb-20 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#090A0F] min-h-screen text-white'>

      
      <div 
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          popupData.show ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-10 invisible"
        }`}
      >
        <p className={`${
          popupData.isAvailable ? "bg-green-500" : "bg-red-500"
        } text-white rounded-full px-8 py-3 shadow-2xl font-bold tracking-wide border border-white/20 backdrop-blur-md`}>
          {popupData.isAvailable ? "Available" : "Not Available"}
        </p>
      </div>

    
      <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
        <h1 className='text-4xl md:text-5xl font-playfair font-bold tracking-tight'>
          {room.hotel.name} <span className='font-sans text-xl md:text-2xl text-gray-400 font-medium ml-1'>({room.roomType})</span>
        </h1>
        <p className='text-xs font-bold tracking-widest py-1.5 px-4 bg-orange-500 text-white rounded-full uppercase shadow-[0_0_15px_rgba(235,140,50,0.3)]'> 
          20% OFF
        </p>
      </div>

      <div className='flex flex-wrap items-center gap-4 mt-6'>
        <div className='flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg'>
          <StarRating/>
          <p className='ml-2 text-sm font-semibold text-gray-300'>200+ Reviews</p>
        </div>
        <div className='flex gap-1.5 items-center text-gray-400 text-sm font-medium'>
          <img src={assets.locationIcon} alt="LocationIcon" className="w-4 h-4 invert opacity-60" />
          <span>{room.hotel.address}</span>
        </div>
      </div>

 
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-4 md:gap-6 lg:h-[500px]'>
        
        {/* Main Image - Left 50% */}
        <div className='w-full h-[300px] lg:h-full'>
          <img 
            src={mainImg} 
            alt="Main Room" 
            className='w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl' 
          />
        </div>
        
       
        <div className='grid grid-cols-2 grid-rows-2 gap-4 w-full h-[300px] lg:h-full'>
        
          {room?.images && room.images.slice(0, 4).map((image, idx) => (
            <div 
              key={idx} 
              onClick={() => setMainImg(image)}
              className={`w-full h-full rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${mainImg === image ? "border-orange-500 shadow-[0_0_15px_rgba(235,140,50,0.4)]" : "border-transparent hover:border-white/30"}`}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${idx}`} 
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-500' 
              />
            </div>
          ))}
        </div>

      </div>


      <div className='flex flex-col md:flex-row md:justify-between items-start md:items-end mt-16 gap-8'>
        <div className='flex flex-col'>
          <h2 className='text-3xl md:text-4xl font-playfair font-semibold'>Experience Luxury Like Never Before</h2>

          <div className='flex flex-wrap items-center mt-6 gap-3'>
            {room.amenities.map((item, idx) => (
              <div key={idx} className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer'>
                <img className='w-4 h-4 invert opacity-80' src={facilityIcons[item]} alt={item} />
                <p className='text-sm font-medium text-gray-300'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1D24] border border-white/10 px-6 py-4 rounded-xl text-center shrink-0">
          <p className='text-xs text-gray-400 font-medium uppercase tracking-wider mb-1'>Price</p>
          <p className='text-3xl font-bold text-white tracking-tight'>₹ {room.pricePerNight} <span className="text-base font-medium text-gray-500">/ night</span></p>
        </div>
      </div>

  
      <form onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-end justify-between bg-[#13161C]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-500/5 p-6 md:p-8 rounded-2xl mx-auto mt-16 w-full' >
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-6 md:gap-8 text-gray-300 w-full md:w-auto'>
          
          <div className="w-full md:w-auto flex-1">
            <label htmlFor="CheckInDate" className='text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2'>Check-In</label>
            <input 
              type="date" 
              id="CheckInDate" 
              required 
              className='w-full bg-white text-black border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 outline-none cursor-pointer ' 
            />
          </div>

          <div className='w-px h-12 bg-white/10 max-md:hidden mt-6'></div>

          <div className="w-full md:w-auto flex-1">
            <label htmlFor="CheckOutDate" className='text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2'>Check-Out</label>
           <input 
              type="date" 
              id="CheckInDate" 
              required 
              className='w-full bg-white text-black border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 outline-none cursor-pointer  ' 
            />
          </div>

          <div className='w-px h-12 bg-white/10 max-md:hidden mt-6'></div>

          <div className='flex flex-col w-full md:w-auto'>
            <label htmlFor="Guests" className='text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2'>Guests</label>
            <input type="number" min="1" id="Guests" placeholder='1' required className='w-full md:w-24 bg-white border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 outline-none text-black transition-all text-center font-bold md:text-left required ' />
          </div>

        </div>
        
        <button type='submit' className='bg-white text-black hover:bg-gray-200 active:scale-95 transition-all font-bold rounded-lg w-full md:w-auto max-md:mt-8 md:px-10 py-3.5 text-sm cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] tracking-wide'>
          Check Availability
        </button>
      </form>

      
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {roomCommonData.map((spec, idx) => (
          <div key={idx} className='flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors' >
            <div className="p-3 bg-black/40 rounded-lg shrink-0">
              <img src={spec.icon} alt={`${spec.title}Icon`} className='w-6 h-6 invert opacity-90' />
            </div>
            <div>
              <p className='text-lg font-semibold text-white'>{spec.title}</p>
              <p className='text-sm text-gray-400 mt-1 leading-relaxed'>{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full border-y border-white/10 my-16 py-12'>
        <p className='text-gray-400 leading-relaxed md:text-lg max-w-5xl'>
          Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment that has a true city feeling. The price quoted is for two guests; at the guest slot, please mark the number of guests to get the exact price for groups. Experience top-tier amenities, 24/7 concierge service, and unforgettable luxury.
        </p>
      </div>

      
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-[#1A1D24] border border-white/5 p-8 rounded-2xl'>
        <div className='flex items-center gap-5'>
          <img
            src={room.hotel.owner?.image || assets.unknown}
            alt="Host"
            className='h-16 w-16 md:h-20 md:w-20 rounded-full object-cover ring-4 ring-black/40'
          />
          <div>
            <p className='text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider'>Hosted By</p>
            <p className='text-xl md:text-2xl font-playfair font-semibold text-white'>
              {room.hotel.name}
            </p>
            <div className='flex items-center mt-2'>
              <StarRating />
              <p className='ml-2 text-sm text-gray-400 font-medium'>200+ reviews</p>
            </div>
          </div>
        </div>
        
        <button className='w-full md:w-auto px-8 py-3 rounded-lg text-white font-semibold bg-white/10 border border-white/20 hover:bg-white hover:text-black transition-all cursor-pointer tracking-wide'> 
          Contact Host
        </button>
      </div>

    </div>
  )
}

export default RoomDetails