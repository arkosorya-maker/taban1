import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { IMAGES, MOCK_CARS } from '../data/mockData';
import { CarCard, FullWidthCarCard } from '../components/ui/CarCard';

const BRANDS = [
  { name: 'Mercedes', icon: <img src="https://cdn.simpleicons.org/mercedes/9ca3af" className="w-[30px] h-[30px]" alt="Mercedes" /> },
  { name: 'Tesla', icon: <img src="https://cdn.simpleicons.org/tesla/9ca3af" className="w-[30px] h-[30px]" alt="Tesla" /> },
  { name: 'Toyota', icon: <img src="https://cdn.simpleicons.org/toyota/9ca3af" className="w-[30px] h-[30px]" alt="Toyota" /> },
  { name: 'Honda', icon: <img src="https://cdn.simpleicons.org/honda/9ca3af" className="w-[30px] h-[30px]" alt="Honda" /> },
  { name: 'More', icon: <MoreHorizontal size={30} className="text-[#9ca3af]" /> },
];

export const HomeView = ({ onCarClick, postView }: { onCarClick: (c: any) => void, postView: 'grid' | 'list' }) => {
  return (
    <div className="flex flex-col pb-6">
      {/* Top Carousel Banner */}
      <div className="relative w-full h-[280px]">
        <img src={IMAGES.merc} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1.5 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-white transition-opacity"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
        </div>
      </div>

      {/* Brand Icons Row */}
      <div className="flex flex-row overflow-x-auto gap-2 py-4 mt-1 mb-1 no-scrollbar px-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {BRANDS.map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-2.5 cursor-pointer flex-1 min-w-[70px]">
            <div className="w-16 h-16 rounded-full border-[1.5px] border-gray-200 flex items-center justify-center bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-gray-300 transition-colors">
              {b.icon}
            </div>
            <span className="text-[13px] font-medium text-gray-400 tracking-wide">{b.name}</span>
          </div>
        ))}
      </div>

      {/* Main Car List/Grid based on postView */}
      {postView === 'grid' ? (
        <>
          <div className="grid grid-cols-2 gap-3 px-3">
            {MOCK_CARS.slice(0, 8).map((car, idx) => <CarCard key={car.id} car={car} idx={idx} onClick={() => onCarClick(car)} />)}
          </div>

          {/* Advertisement Banner */}
          <div className="w-full px-3 py-4">
            <div className="w-full h-[120px] bg-gray-200 flex items-center justify-center text-gray-600 text-lg tracking-wide rounded-[8px] font-sans mb-1 shadow-sm border border-gray-100">
              Advertisement
            </div>
          </div>

          {/* Best Companies Section */}
          <div className="px-3 pt-6 pb-3">
            <h2 className="text-xl font-bold text-black">Best Companies</h2>
          </div>
          <div className="flex overflow-x-auto gap-3 px-3 pb-6 no-scrollbar snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {MOCK_CARS.slice(8, 16).map((car, idx) => (
              <div key={car.id} className="w-[calc(50vw-18px)] max-w-[206px] shrink-0 snap-start">
                <CarCard car={car} idx={idx + 8} onClick={() => onCarClick(car)} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-1 mt-2">
          {MOCK_CARS.slice(0, 6).map((car, idx) => (
             <FullWidthCarCard key={car.id} car={car} idx={idx} onClick={() => onCarClick(car)} />
          ))}

          {/* Advertisement Banner after 6 cars */}
          <div className="w-full px-3 py-4 pb-2">
            <div className="w-full h-[120px] bg-gray-200 flex items-center justify-center text-gray-600 text-lg tracking-wide rounded-[8px] font-sans mb-1 shadow-sm border border-gray-100">
              Advertisement
            </div>
          </div>

          {/* Best Companies Section */}
          <div className="pt-2 pb-6">
            <div className="px-4 pb-3">
              <h2 className="text-[19px] font-bold text-black border-b border-gray-100 pb-3" style={{fontFamily: 'sans-serif'}}>Best Companies</h2>
            </div>
            <div className="flex overflow-x-auto gap-3 px-3 no-scrollbar snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {MOCK_CARS.slice(6, 14).map((car, idx) => (
                <div key={car.id} className="w-[calc(50vw-18px)] max-w-[206px] shrink-0 snap-start pb-2">
                  <CarCard car={car} idx={idx + 6} onClick={() => onCarClick(car)} />
                </div>
              ))}
            </div>
          </div>

          {/* Remaining Cars */}
          {MOCK_CARS.slice(14).concat(MOCK_CARS.slice(0, 4)).map((car, idx) => (
             <FullWidthCarCard key={car.id + '_rem'} car={car} idx={idx + 14} onClick={() => onCarClick(car)} />
          ))}
        </div>
      )}
    </div>
  );
};
