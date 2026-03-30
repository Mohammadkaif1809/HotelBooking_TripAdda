import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div className="w-full text-white">
      <div className="[&_h1]:text-white [&_p]:text-gray-400 mb-10">
        <Title 
          align='left' 
          font='outfit' 
          title="Dashboard" 
          subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place."
        />
      </div>

      <div className='flex flex-wrap gap-6 my-8'>
        <div className='bg-[#1A1D24] border border-white/10 rounded-2xl flex items-center p-6 min-w-[260px] shadow-lg hover:border-white/20 transition-all'>
          <img src={assets.totalBookingIcon} alt="icon" className='max-sm:hidden h-12 w-12 p-3 bg-cyan-500/10 rounded-full invert' />
          <div className='flex flex-col sm:ml-5'>
            <p className='text-sm font-bold uppercase tracking-wider text-gray-400'>Total Booking</p>
            <p className='text-3xl font-bold text-white mt-1'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        <div className='bg-[#1A1D24] border border-white/10 rounded-2xl flex items-center p-6 min-w-[260px] shadow-lg hover:border-white/20 transition-all'>
          <img src={assets.totalBookingIcon} alt="icon" className='max-sm:hidden h-12 w-12 p-3 bg-cyan-500/10 rounded-full invert' />
          <div className='flex flex-col sm:ml-5'>
            <p className='text-sm font-bold uppercase tracking-wider text-gray-400'>Total Revenue</p>
            <p className='text-3xl font-bold text-white mt-1'>₹ {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      <h2 className='text-xl font-playfair font-semibold text-white mb-6 mt-12'>
        Recent Bookings
      </h2>
      
      <div className='w-full max-w-4xl border border-white/10 rounded-2xl overflow-hidden bg-[#13161C] shadow-2xl'>
        <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
          <table className='w-full text-left border-collapse'>
            <thead className='bg-[#1A1D24] sticky top-0 z-10'>
              <tr>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10'>Full Name</th>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10 max-sm:hidden'>Room Name</th>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10 text-center'>Total Amount</th>
                <th className='py-4 px-6 text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-white/10 text-center'>Status</th>
              </tr>
            </thead>
            <tbody className='text-sm divide-y divide-white/5'>
              {dashboardData.bookings.map((item,index) =>(
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className='py-4 px-6 text-gray-200 font-medium'>
                    {item.user.username}
                  </td>
                  <td className='py-4 px-6 text-gray-400 max-sm:hidden'>
                    {item.room.roomType}
                  </td>
                  <td className='py-4 px-6 text-gray-200 font-bold text-center'>
                    ₹{item.totalPrice}
                  </td>
                  <td className='py-4 px-6 flex justify-center'>
                    <span className={`py-1.5 px-4 text-xs font-bold uppercase tracking-widest rounded-full border ${item.isPaid ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]'}`}>
                      {item.isPaid ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
 
export default Dashboard