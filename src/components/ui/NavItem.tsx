import React from 'react';

export const NavItem = ({ icon, label, active, onClick }: any) => (
  <div onClick={onClick} className="flex flex-col flex-1 items-center justify-center gap-1.5 cursor-pointer h-full relative transition-transform active:scale-95">
    {/* Active indicator bar */}
    {active && (
      <div className="absolute top-0 w-8 h-[2px] bg-[#5f84e8] rounded-b-full"></div>
    )}
    <div className={`${active ? 'text-[#5f84e8]' : 'text-gray-400 hover:text-gray-600'} transition-colors`}>
      {icon}
    </div>
    <span className={`text-[11.5px] font-medium tracking-wide ${active ? 'text-[#5f84e8] font-bold' : 'text-gray-500'}`}>
      {label}
    </span>
  </div>
);
