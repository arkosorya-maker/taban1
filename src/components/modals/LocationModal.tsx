import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { CITIES } from '../../data/mockData';

export const LocationModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState(false);

  const toggleCity = (city: string) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter(c => c !== city));
      setAllSelected(false);
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelectedCities([]);
      setAllSelected(false);
    } else {
      setSelectedCities([...CITIES]);
      setAllSelected(true);
    }
  };

  return (
    <div className="absolute inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm shadow-2xl">
      <div className="bg-white rounded-[28px] w-full max-h-[90dvh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 pb-2 shrink-0">
          <h2 className="text-[22px] font-normal text-gray-900 tracking-tight">Select where to buy</h2>
          <div className="flex items-center gap-3 bg-[#f3f4f6] rounded-2xl px-4 py-3.5 mt-5">
            <Search size={20} className="text-gray-500" strokeWidth={2} />
            <input 
              type="text" 
              placeholder="Search cities" 
              className="bg-transparent outline-none w-full text-[16px] placeholder:text-gray-500 text-gray-900"
            />
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 mt-1 shrink-0 cursor-pointer" onClick={toggleAll}>
          <span className="text-[16px] font-normal text-gray-800">All cities</span>
          <div className={`w-[22px] h-[22px] border-[1.5px] rounded-[6px] flex items-center justify-center transition-colors ${allSelected ? 'bg-[#b3191f] border-[#b3191f]' : 'border-gray-300'}`}>
            {allSelected && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
          </div>
        </div>

        <div className="h-[1px] bg-gray-100 mx-6 shrink-0"></div>

        <div className="flex-1 overflow-y-auto px-6 py-2">
          {CITIES.map((city) => {
            const isSelected = selectedCities.includes(city);
            return (
              <div key={city} className="flex items-center justify-between py-4 cursor-pointer" onClick={() => toggleCity(city)}>
                <span className="text-[16px] font-normal text-gray-800">{city}</span>
                <div className={`w-[22px] h-[22px] border-[1.5px] rounded-[6px] flex items-center justify-center transition-colors ${isSelected ? 'bg-[#b3191f] border-[#b3191f]' : 'border-gray-300'}`}>
                  {isSelected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-end gap-6 p-6 pt-4 shrink-0 bg-white">
          <button onClick={onClose} className="text-[#6b4c9a] text-[15px] font-medium tracking-wide">Cancel</button>
          <button onClick={onClose} className="text-[#6b4c9a] text-[15px] font-medium tracking-wide">Save</button>
        </div>
      </div>
    </div>
  );
};
