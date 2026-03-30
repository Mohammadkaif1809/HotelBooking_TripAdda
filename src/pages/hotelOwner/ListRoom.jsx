import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListRoom = () => {

  const [rooms,setRooms] = useState(roomsDummyData)

  return (
    <div className="w-full text-white">
      <div className="[&_h1]:text-white [&_p]:text-gray-400 mb-8">
        <Title align="left" font='outfit' title="Room Listing" subTitle="View, edit, or manage all listed rooms. Keep the information up to date to provide the best experience for users." />
      </div>
      
      <p className='text-sm font-bold uppercase tracking-wider text-gray-400 mb-4 mt-8'>All Rooms</p>
      
      <div className='w-full max-w-4xl border border-white/10 rounded-2xl overflow-hidden bg-[#13161C] shadow-2xl'>
        <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
          <table className='w-full text-left border-collapse'>
            <thead className='bg-[#1A1D24] sticky top-0 z-10'>
              <tr>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10'>Room Type</th>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10 max-sm:hidden'>Facility</th>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10 text-center'>Price / night</th>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10 text-center'>Available</th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-white/5'>
              {
                rooms.map((item,index)=>(
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className='py-4 px-6 text-gray-200 font-medium whitespace-nowrap'>
                      {item.roomType}
                    </td>
                    <td className='py-4 px-6 text-gray-400 max-sm:hidden'>
                      {item.amenities.join(', ')}
                    </td>
                    <td className='py-4 px-6 text-gray-200 font-bold text-center'>
                      ₹{item.pricePerNight}
                    </td>
                    <td className='py-4 px-6 text-center'>
                      {/* Premium Dark Mode Toggle Switch */}
                      <label className='relative inline-flex items-center justify-center cursor-pointer'>
                        <input type="checkbox" className='sr-only peer' checked={item.isAvailable} readOnly />
                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"></div>
                      </label>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListRoom