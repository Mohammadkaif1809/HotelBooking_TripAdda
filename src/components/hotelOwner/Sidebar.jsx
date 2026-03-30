import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const sideBarLinks = [
    { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
    { name: 'Add Room', path: '/owner/add-room', icon: assets.addIcon },
    { name: 'List Room', path: '/owner/list-room', icon: assets.listIcon }
  ];

  return (
    <div className="md:w-64 w-16 border-r h-full min-h-screen text-sm border-white/10 bg-[#090A0F] pt-6 flex flex-col transition-all duration-300 shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-40">

      {sideBarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          end={item.path === '/owner'}
          className={({ isActive }) =>
            `group flex items-center py-3.5 px-4 md:px-8 gap-4 transition-all duration-300 ${
              isActive
                ? "border-r-4 md:border-r-[4px] bg-cyan-500/10 border-cyan-400 text-cyan-400 font-semibold shadow-[inset_-10px_0_20px_rgba(6,182,212,0.05)]"
                : "border-r-4 border-transparent hover:bg-white/5 text-gray-400 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Icons invert to white, active is fully opaque, inactive is 50% opacity */}
              <img 
                src={item.icon} 
                alt={item.name} 
                className={`min-w-5 min-h-5 transition-all duration-300 invert ${isActive ? 'opacity-100 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'opacity-50 group-hover:opacity-100 group-hover:scale-110'}`} 
              />
              <p className="hidden md:block tracking-wide">{item.name}</p>
            </>
          )}
        </NavLink>
      ))}

    </div>
  );
};

export default Sidebar;