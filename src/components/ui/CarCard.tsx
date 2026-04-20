import React from 'react';
import { MapPin } from 'lucide-react';

export const VIPBadge = () => (
  <div className="absolute top-0 left-0 w-16 h-16 z-10 overflow-hidden pointer-events-none rounded-tl-xl">
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[56px] border-t-[#ea4335] border-r-[56px] border-r-transparent"></div>
      <span className="absolute top-2 left-2 text-white text-[11px] font-bold tracking-wider -rotate-45 origin-center">VIP</span>
  </div>
);

export const CarCard = ({ car, idx, onClick }: { car: any, idx: number, onClick: () => void }) => (
  <div onClick={onClick} className="flex flex-col bg-white overflow-hidden cursor-pointer">
    <div className="relative aspect-[4/3] bg-gray-100 rounded-t-xl rounded-b-md">
      <img src={car.image} className="w-full h-full object-cover rounded-t-xl rounded-b-md" alt={car.title} />
      
      {/* Badges */}
      {idx === 0 && <VIPBadge />}
      {idx === 3 && <VIPBadge />}
      {idx === 4 && (
        <div className="absolute top-2 right-2 bg-[#34a853] text-white text-[11px] font-medium px-3 py-0.5 rounded-sm z-10">
          Private Ad
        </div>
      )}
    </div>
    <div className="py-2.5 flex flex-col gap-1">
      <h3 className="text-[15px] font-medium text-gray-800 leading-snug line-clamp-2 min-h-[44px]">
        {car.title}
      </h3>
      <div className="flex justify-between items-center mt-0.5">
        <div className="flex items-center text-gray-400 text-[13px]">
          <MapPin size={11} className="mr-1" /> {car.location}
        </div>
        <span className="text-gray-800 text-[15px]">{car.price}</span>
      </div>
    </div>
  </div>
);

export const FullWidthCarCard = ({ car, idx, onClick }: { car: any, idx: number, onClick: () => void }) => (
  <div onClick={onClick} className="flex flex-col bg-white overflow-hidden cursor-pointer rounded-2xl mb-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] mx-3 border border-gray-100 pb-2">
    <div className="relative aspect-[16/9] bg-gray-100">
      <img src={car.image} className="w-full h-full object-cover" alt={car.title} />
      
      {/* Badges */}
      {idx === 0 && <VIPBadge />}
      {idx === 3 && <VIPBadge />}
      {idx === 4 && (
        <div className="absolute top-0 right-0 bg-[#34a853] text-white text-[13.5px] font-medium px-3 py-1 z-10 rounded-bl-xl shadow-sm">
          Private Ad
        </div>
      )}
    </div>
    <div className="p-4 flex flex-col gap-1.5">
      <h3 className="text-[18px] font-normal text-gray-800 leading-snug">
        {car.title}
      </h3>
      <div className="flex items-center text-gray-400 text-[14px]">
        <MapPin size={14} className="mr-1.5 stroke-[2.5]" /> {car.location}
      </div>
      <div className="text-[20px] text-[#fb7185] mt-1 font-normal tracking-wide">
        {car.price}
      </div>
    </div>
  </div>
);
