import React from 'react';
import {ArrowLeft, MapPin, Eye, Cpu, Settings2, Gauge, Fuel, Globe, CheckCircle2, MessageCircle} from 'lucide-react';
import { IMAGES } from '../data/mockData';

const SpecItem = ({ icon: Icon, value, label }: any) => (
  <div className="flex flex-col items-center justify-center bg-gray-50 p-3 rounded-xl border border-gray-100 gap-1.5">
    <Icon size={22} className="text-gray-400 stroke-[1.5px]" />
    <div className="flex flex-col items-center">
      <span className="text-[12px] font-semibold text-gray-800 text-center leading-tight">{value}</span>
    </div>
  </div>
);

const InfoRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex items-start py-3.5 border-b border-gray-100/60 last:border-0">
    <span className="w-1/3 text-[14px] text-gray-500">{label}</span>
    <span className="w-2/3 text-[14px] font-medium text-gray-900 text-right">{value}</span>
  </div>
);

export const DetailsView = ({ car, onBack }: { car: any, onBack: () => void }) => (
  <div className="bg-white absolute inset-0 z-50 overflow-y-auto w-full h-[100dvh]">
    <div className="pb-24">
      {/* Full Carousel Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-900">
        <img src={car.image || IMAGES.kia} alt={car.title} className="w-full h-full object-cover" />
        
        {/* Top Gradient for controls */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent"></div>
        
        <button onClick={onBack} className="absolute top-5 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition shadow-sm z-10">
          <ArrowLeft size={20} />
        </button>
        <div className="absolute top-6 right-4 bg-black/40 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-sm z-10">
          1/5
        </div>
        <div className="absolute bottom-3 left-0 w-full flex justify-center gap-1.5 z-10">
          <div className="w-1.5 h-1.5 rounded-full border border-white"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-white bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-white"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-white"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-white"></div>
        </div>
      </div>

      {/* Title & Header Section */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex flex-col gap-2">
          <h2 className="text-gray-500 text-sm font-medium">{car.title.split(' ')[0]}</h2>
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">{car.title}</h1>
            <div className="text-2xl font-bold text-[#ef4444]">{car.price}</div>
          </div>
          <div className="flex items-center text-gray-400 text-[13px] mt-1 gap-3">
            <span className="flex items-center"><MapPin size={14} className="mr-1" /> {car.location} • Just Now</span>
            <span className="flex items-center"><Eye size={14} className="mr-1" /> 430</span>
          </div>
        </div>
      </div>

      {/* Visual Specs Grid */}
      <div className="p-4 grid grid-cols-3 gap-2.5 border-b border-gray-100 bg-white">
        <SpecItem icon={Cpu} value="Engine 3.8" label="Liters" />
        <SpecItem icon={Settings2} value="6 Cylinder" label="Layout" />
        <SpecItem icon={Gauge} value="Automatic" label="Transmission" />
        <SpecItem icon={Fuel} value="Gasoline" label="Fuel" />
        <SpecItem icon={Globe} value="Specs" label="US" />
        <SpecItem icon={Gauge} value="44 km" label="Mileage" />
      </div>

      {/* Detailed Info Table */}
      <div className="px-5 py-2 border-b border-gray-100">
        <InfoRow label="Make" value={car.title.split(' ')[0]} />
        <InfoRow label="Model" value={car.title.split(' ').slice(1).join(' ')} />
        <InfoRow label="Year Model" value={car.year || "2024"} />
        <InfoRow label="Trim" value="Select" />
        <InfoRow label="Seat Number" value="4" />
        <InfoRow label="Color" value="White" />
        <InfoRow label="Description" value="A beautiful pristine condition vehicle with top of the line options." />
      </div>

      {/* Badges Section */}
      <div className="p-5 border-b border-gray-100">
        <h3 className="text-[13px] font-medium text-gray-500 mb-3 uppercase tracking-wider">Other Specifications</h3>
        <div className="flex flex-wrap gap-2">
          {['Parking Sensor', 'LED Headlights', 'Rear Camera', 'Sunroof', 'Head-Up Display', 'Seat Heating', 'Drive Mode', 'Remote Start', 'AWD'].map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-[13px] rounded-lg font-medium">{tag}</span>
          ))}
        </div>
      </div>

      {/* Seller Profile Card */}
      <div className="p-5">
        <h3 className="text-[13px] font-medium text-gray-500 mb-4 uppercase tracking-wider">Seller</h3>
        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
          <img src={IMAGES.profile} className="w-14 h-14 rounded-full border border-gray-200 object-cover" alt="Seller" />
          <div className="flex flex-col gap-0.5">
            <h4 className="font-bold text-gray-900 flex items-center gap-1.5">
              Amin Samad <CheckCircle2 size={14} className="text-blue-500 fill-blue-50" />
            </h4>
            <span className="text-[11px] text-gray-500 font-medium">Verified Company</span>
            <p className="text-[12px] text-gray-400 flex items-center gap-1 mt-0.5"><MapPin size={12}/> Baghdad</p>
          </div>
        </div>
      </div>
    </div>

    {/* Fixed Action Bottom Bar */}
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 flex gap-3 z-50 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
      <button className="flex-1 bg-[#ef4444] text-white font-semibold py-3.5 rounded-xl shadow-md shadow-red-500/20 active:opacity-90 transition">
        Call Seller
      </button>
      <button className="w-14 bg-green-500 text-white flex items-center justify-center rounded-xl shadow-md shadow-green-500/20 active:opacity-90 transition">
        <MessageCircle size={22} fill="currentColor" className="text-white" />
      </button>
    </div>
  </div>
);
