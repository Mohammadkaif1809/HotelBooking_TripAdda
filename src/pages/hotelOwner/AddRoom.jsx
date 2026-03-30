import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

   const [images,setImages] = useState({
      1:null,
      2:null,
      3:null,
      4:null,
    })

    const [inputs,setInputs] = useState({
      roomType:'',
      pricePerNight:0,
      amenities:{
        'Free WIFI' : false,
        "Free breakfast":false, // Fixed typo from 'reakfast'
        "Room Service" : false,
        "Mountain View" :false,
        "Pool Access" : false,
      }
    })

  return (
    <div className="text-white w-full max-w-4xl">
      <form>
        <div className="mb-10 [&_h1]:text-white [&_p]:text-gray-400">
          <Title align="left" font="outfit" title="Add Room" subTitle="Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user booking experience." />
        </div>
        
        <p className='text-sm font-bold uppercase tracking-wider text-gray-400 mb-3'>Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 mb-8 flex-wrap'>
          {Object.keys(images).map((key)=>(
            <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer group">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#1A1D24] border border-white/10 rounded-xl overflow-hidden group-hover:border-cyan-500 group-hover:bg-white/5 transition-all">
                <img 
                  className={`object-cover w-full h-full transition-all ${!images[key] && 'w-8 h-8 opacity-50 invert group-hover:scale-110'}`}
                  src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} 
                  alt="Upload"
                />
              </div>
              <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e=>setImages({...images,[key]:e.target.files[0]})}/>
            </label>
          ))}
        </div>

        <div className='flex w-full max-sm:flex-col sm:gap-6 mt-6'> 
          <div className='flex-1 max-w-xs'>
            <label className='text-sm font-bold uppercase tracking-wider text-gray-400 block mb-2'>Room Type</label>
            <select 
              value={inputs.roomType} 
              onChange={e=>setInputs({...inputs,roomType:e.target.value})}
              className='w-full bg-[#1A1D24] border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 outline-none text-white transition-all cursor-pointer appearance-none' 
            >
              <option value="" className="bg-[#1A1D24]">Select Room Type</option>
              <option value="Single Bed" className="bg-[#1A1D24]">Single Bed</option>
              <option value="Double Bed" className="bg-[#1A1D24]">Double Bed</option>
              <option value="Luxury Room" className="bg-[#1A1D24]">Luxury Room</option>
              <option value="Family Suite" className="bg-[#1A1D24]">Family Suite</option>
            </select>
          </div>
          
          <div className='max-sm:mt-4'>
            <label className='text-sm font-bold uppercase tracking-wider text-gray-400 block mb-2'>
              Price <span className='text-[10px] text-gray-500 lowercase'>/ night</span>
            </label>
            <input 
              type="number" 
              placeholder='0' 
              className='w-full sm:w-32 bg-[#1A1D24] border border-white/10 focus:border-cyan-500 rounded-lg px-4 py-3 outline-none text-white transition-all' 
              value={inputs.pricePerNight} 
              onChange={e=>setInputs({...inputs,pricePerNight: e.target.value})}
            />
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Amenities</p>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl'>
            {Object.keys(inputs.amenities).map((amenity,index)=>(
              <label key={index} htmlFor={`amenities${index+1}`} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  id={`amenities${index + 1}`}
                  checked={inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({...inputs,
                      amenities: {...inputs.amenities,[amenity]: !inputs.amenities[amenity],
                      },
                    })
                  }
                  className="w-5 h-5 accent-cyan-500 bg-white/10 border-white/20 rounded cursor-pointer transition-all"
                />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
        
        <button className='bg-white text-black font-bold px-10 py-3.5 rounded-lg mt-12 cursor-pointer hover:bg-gray-200 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] tracking-wide'>
          Add Room
        </button>
      </form>
    </div>
  )
}

export default AddRoom