import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2, ArrowLeft, Share2, Phone, Globe } from 'lucide-react';
import { IMAGES, MOCK_CARS, MOCK_COMPANIES } from '../data/mockData';

export const CompanyListView = ({ onCompanyClick }: { onCompanyClick: (c: any) => void }) => {
  return (
    <div className="flex flex-col h-full bg-white animate-in fade-in duration-300">
      <div className="px-5 pt-4 pb-3 z-10 bg-white shrink-0">
        <h1 className="text-[24px] font-normal text-gray-900 mb-4">Companies</h1>
        <div className="flex items-center gap-3 bg-[#f5f5f5] rounded-full px-4 py-3">
          <Search size={20} className="text-gray-500 shrink-0" strokeWidth={2} />
          <input 
            type="text" 
            placeholder="Search companies" 
            className="bg-transparent outline-none w-full text-[16px] text-gray-900 placeholder:text-gray-500"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 pt-2 pb-24 flex flex-col gap-4">
        {MOCK_COMPANIES.map(company => (
          <div 
            key={company.id} 
            className="rounded-[16px] overflow-hidden relative h-[200px] cursor-pointer shadow-sm group border border-gray-100"
            onClick={() => onCompanyClick(company)}
          >
            <img src={IMAGES.cihanBg} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
            
            <div className="absolute inset-0 p-4 flex flex-col items-center pt-8">
               <div className="text-center flex flex-col items-center">
                 <h3 className="text-[#b3191f] font-bold text-xl drop-shadow-sm mb-1 leading-none">لشراء تويوتا فقط</h3>
                 <h2 className="text-[#b3191f] font-bold text-3xl drop-shadow-sm leading-none">جيهان موتورز</h2>
               </div>
            </div>

            <div className="absolute top-0 right-0 bg-white/90 px-3 py-1.5 text-[9px] font-bold text-black flex flex-col items-center rounded-bl-lg">
              <span className="leading-tight">الوكيل المعتمد لـ تويوتا</span>
              <span className="leading-tight">قيادة بكل ثقة</span>
            </div>
            
            <div className="absolute bottom-4 left-4 flex gap-3 items-end w-full pr-8 z-10">
              <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shrink-0">
                <img src={company.logo} className="w-8 h-8 object-contain" alt={company.brand} />
              </div>
              <div className="flex flex-col w-full pb-0.5 shadow-sm">
                <h3 className="text-white text-[18px] font-normal tracking-wide leading-tight drop-shadow-md flex items-center gap-1.5">
                  {company.name}
                  <CheckCircle2 size={16} fill="#3b82f6" className="text-white" />
                </h3>
                <div className="flex items-center text-white/90 gap-1.5 mt-0.5 text-[14px]">
                  <MapPin size={14} className="drop-shadow-md" /> <span className="drop-shadow-md">{company.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CompanyProfileView = ({ company, onBack, onCarClick }: { company: any, onBack: () => void, onCarClick: (c: any) => void }) => {
  const [tab, setTab] = useState<'cars' | 'about'>('cars');
  const companyCars = MOCK_CARS.filter(c => c.badge !== 'Private');

  return (
    <div className="flex flex-col h-[100dvh] bg-white absolute inset-0 z-50 animate-in slide-in-from-right-full duration-300">
      <div className="relative w-full h-[240px] shrink-0">
        <img src={IMAGES.cihanBg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/80"></div>
        
        <div className="absolute top-4 left-4 z-20">
          <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md">
            <ArrowLeft size={22} />
          </button>
        </div>
        <div className="absolute top-4 right-4 flex gap-2 z-20">
           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-md">
            <Share2 size={20} />
          </button>
        </div>
        
        <div className="absolute top-0 right-0 bg-white/90 px-3 py-1.5 text-[9px] font-bold text-black flex flex-col items-center z-10 rounded-bl-lg mt-14">
           <span className="leading-tight">الوكيل المعتمد لـ تويوتا</span>
           <span className="leading-tight">قيادة بكل ثقة</span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center mix-blend-normal z-0 mt-16 pointer-events-none">
            <div className="text-center flex flex-col items-center">
              <h3 className="text-[#b3191f] font-bold text-xl drop-shadow-sm mb-1 leading-none">لشراء تويوتا فقط</h3>
              <h2 className="text-[#b3191f] font-bold text-4xl drop-shadow-sm leading-none pt-1">جيهان موتورز</h2>
            </div>
        </div>
        
        <div className="absolute bottom-4 left-4 flex gap-3 items-end z-10 w-full pr-8">
          <div className="w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center shrink-0">
            <img src={company.logo} className="w-10 h-10 object-contain" alt={company.brand} />
          </div>
          <div className="flex flex-col pb-0.5">
            <h3 className="text-white text-[22px] font-normal tracking-wide leading-tight drop-shadow-md flex items-center gap-2">
              {company.name}
              <CheckCircle2 size={20} fill="#3b82f6" className="text-white" />
            </h3>
            <div className="flex items-center text-white/90 gap-1 mt-0.5 text-[14px]">
              <MapPin size={14} className="drop-shadow-md" /> <span className="drop-shadow-md">{company.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-safe">
        <div className="px-5 pt-6 flex flex-col gap-6">
          <p className="text-[14.5px] text-gray-700 leading-relaxed font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus est. Nulla ornare. Ut a diam justo. Ut tortor nibh, fermentum a vulputate pharetra.
          </p>

          <div className="border border-gray-200 rounded-[12px] p-4 flex gap-4 items-center mb-1 shadow-sm">
            <div className="w-14 h-14 border border-gray-100 rounded-[8px] flex items-center justify-center shrink-0 p-1.5 shadow-sm">
               <img src={company.logo} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[13px] text-gray-400 font-medium">Authorized Dealer for</span>
              <span className="text-[20px] text-gray-900 font-normal mt-0.5">{company.brand}</span>
            </div>
          </div>

          <div className="flex border-b border-gray-200 w-full relative -mx-5 px-5">
            <button 
              onClick={() => setTab('cars')}
              className={`flex-1 pb-4 text-center text-[15px] font-medium transition-colors relative ${tab === 'cars' ? 'text-blue-600' : 'text-gray-500'}`}
            >
              Cars
              {tab === 'cars' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full"></div>}
            </button>
            <button 
              onClick={() => setTab('about')}
              className={`flex-1 pb-4 text-center text-[15px] font-medium transition-colors relative ${tab === 'about' ? 'text-blue-600' : 'text-gray-500'}`}
            >
              About
              {tab === 'about' && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full"></div>}
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-4 pb-8">
            {tab === 'cars' && (
              companyCars.map(car => (
                <div key={car.id} className="flex gap-4 cursor-pointer mb-2 animate-in slide-in-from-bottom-2 fade-in duration-300" onClick={() => onCarClick(car)}>
                  <div className="w-[110px] h-[130px] rounded-[10px] overflow-hidden shrink-0 relative bg-gray-100">
                    <img src={car.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-1">
                    <h3 className="text-[16px] text-gray-900 font-normal leading-tight">{car.title}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="border border-gray-200 text-gray-500 text-[11px] px-2 py-0.5 rounded-md font-medium">{car.year}</span>
                      <span className="border border-gray-200 text-gray-500 text-[11px] px-2 py-0.5 rounded-md font-medium">16,000 mile</span>
                    </div>
                    <div className="flex justify-between w-full mt-auto items-end">
                      <span className="text-[#ef4444] text-[18px] tracking-tight">{car.price}</span>
                      <div className="flex items-center text-gray-400 gap-1 text-[12px] mb-0.5">
                        <MapPin size={12} /> {car.location.split(',')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {tab === 'about' && (
              <div className="flex flex-col gap-5 animate-in slide-in-from-bottom-2 fade-in duration-300">
                <div className="bg-[#f5f5f5] rounded-full px-5 py-3.5 flex items-center gap-4 border border-gray-100 shadow-sm">
                   <div className="w-8 h-8 rounded-full bg-[#1eab55] flex items-center justify-center text-white shrink-0 shadow-sm border-[2px] border-white ring-1 ring-[#1eab55]/20">
                     <Phone size={14} fill="white" className="stroke-white" />
                   </div>
                   <span className="text-[16px] text-gray-800 font-normal">07503821872</span>
                </div>
                <div className="bg-[#f5f5f5] rounded-full px-5 py-3.5 flex items-center gap-4 border border-gray-100 shadow-sm -mt-1">
                   <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-sm border-[2px] border-white ring-1 ring-blue-500/20">
                     <Globe size={14} className="text-white stroke-[2.5]" />
                   </div>
                   <span className="text-[16px] text-gray-800 font-normal">www.aminsamad.com</span>
                </div>
                
                <h3 className="text-[15px] text-gray-800 font-normal mt-2 leading-relaxed px-1">
                  Address: Erbil Headquarter Branch Cihan Group Plaza, Kirkuk Road
                </h3>
                
                <div className="w-full aspect-video rounded-[16px] overflow-hidden bg-[#e5e3df] mt-1 relative border border-gray-200">
                  <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560%2Cc_limit/GoogleMapTA.jpg" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] text-[#ea4335]">
                    <svg width="32" height="40" viewBox="0 0 24 30" fill="currentColor"><path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 18 8 18s8-12.75 8-18c0-4.42-3.58-8-8-8zm0 11.5c-1.93 0-3.5-1.57-3.5-3.5S10.07 4.5 12 4.5 15.5 6.07 15.5 8 13.93 11.5 12 11.5z"/></svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
