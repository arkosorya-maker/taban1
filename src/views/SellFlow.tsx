import React, { useState } from 'react';
import { ArrowLeft, Phone, ChevronDown, Camera, Check, DollarSign, Cpu, Gauge, Settings2, Fuel, Globe, LayoutGrid } from 'lucide-react';
import { IMAGES } from '../data/mockData';

const ProgressBar = ({ currentStep }: { currentStep: number }) => {
  const mapped = Math.floor((currentStep / 13) * 6); 
  const dots = Array.from({length: 7}).map((_, i) => {
    if (i < mapped) return "check";
    if (i === mapped) return "current";
    return "pending";
  });

  return (
    <div className="flex items-center justify-between w-full px-4 pt-1 pb-4">
      {dots.map((state, i) => (
        <React.Fragment key={i}>
          {state === 'check' && <div className="w-6 h-6 rounded-full bg-[#1eab55] flex items-center justify-center shrink-0"><Check size={16} strokeWidth={4} className="text-white"/></div>}
          {state === 'current' && <div className="w-6 h-6 rounded-full border-[3px] border-[#f5a623] shrink-0"></div>}
          {state === 'pending' && <div className="w-3.5 h-3.5 rounded-full bg-gray-200 shrink-0 mx-1.5"></div>}
          
          {i < dots.length - 1 && (
            <div className={`flex-1 h-[3px] mx-1 rounded-full ${i < mapped ? 'bg-[#1eab55]' : 'bg-gray-200'}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
};

const Step1 = () => (
  <div className="flex flex-col gap-6">
     <div className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">Governorate</label>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex justify-between items-center bg-white shadow-sm">
         <span className="text-[16px] text-gray-800">Erbil</span>
         <ChevronDown size={20} className="text-gray-500" />
       </div>
     </div>
     <div className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">City/District</label>
       {['Erbil', 'Erbil 1', 'Erbil 2', 'Erbil 3', 'Erbil 4'].map((city, i) => (
         <div key={i} className="px-4 py-3.5 border border-gray-200 rounded-[12px] bg-white mb-0 shadow-sm">
           <span className="text-[16px] text-gray-800">{city}</span>
         </div>
       ))}
     </div>
  </div>
);

const Step2 = () => (
  <div className="grid grid-cols-3 gap-[2px] -mx-4 -mt-4">
    {[...Array(12)].map((_, i) => (
      <div key={i} className="aspect-square bg-[#f5f5f5] flex items-center justify-center">
        <Camera size={26} className="text-gray-600" strokeWidth={1.5} />
      </div>
    ))}
  </div>
);

const Step3 = () => (
  <div className="flex flex-col gap-5">
    {['Brand', 'Model', 'Year Model', 'Trim'].map((label, i) => (
      <div key={i} className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">{label}</label>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex justify-between items-center bg-white shadow-sm">
         <span className="text-[16px] text-gray-800">Select</span>
         <ChevronDown size={20} className="text-gray-500" />
       </div>
     </div>
    ))}
  </div>
);

const Step4 = () => (
  <div className="flex flex-col gap-6">
     <div className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">Import Country</label>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex justify-between items-center bg-white shadow-sm">
         <span className="text-[16px] text-gray-800">Select</span>
         <ChevronDown size={20} className="text-gray-500" />
       </div>
     </div>
     <div className="flex flex-col gap-4">
       <label className="text-gray-800 text-[17px]">Transmission</label>
       <div className="flex flex-wrap gap-2.5">
         {['Automatic', 'Manual'].map(o => <div key={o} className="bg-[#f0f0f0] px-5 py-3 rounded-full text-[15px] font-medium text-gray-800">{o}</div>)}
       </div>
     </div>
     <div className="flex flex-col gap-4">
       <label className="text-gray-800 text-[17px]">Cylinder</label>
       <div className="flex flex-wrap gap-2.5">
         {['6 Cylinder', '4 Cylinder'].map(o => <div key={o} className="bg-[#f0f0f0] px-5 py-3 rounded-full text-[15px] font-medium text-gray-800">{o}</div>)}
       </div>
     </div>
     <div className="flex flex-col gap-4">
       <label className="text-gray-800 text-[17px]">Engine Size</label>
       <div className="flex flex-wrap gap-2.5">
         {['3.4', '5.7', '4.0', '3.5'].map(o => <div key={o} className="bg-[#f0f0f0] px-5 py-3 rounded-full text-[15px] font-medium text-gray-800">{o}</div>)}
       </div>
     </div>
  </div>
);

const Step5 = () => (
  <div className="flex flex-col gap-8">
     <div className="flex flex-col gap-4">
       <label className="text-gray-800 text-[17px]">Seat Material</label>
       <div className="flex flex-col gap-2.5">
         {['Fabric', 'Leather', 'Mix'].map(o => <div key={o} className="border border-gray-200 px-4 py-4 rounded-[12px] text-[16px] text-gray-800 shadow-sm">{o}</div>)}
       </div>
     </div>
     <div className="flex flex-col gap-4">
       <label className="text-gray-800 text-[17px]">Seat Number</label>
       <div className="flex flex-wrap gap-3">
         {['2', '4', '5', '6', '7', '8', '9', '10+'].map(o => (
           <div key={o} className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-[16px] text-gray-800 shadow-sm">{o}</div>
         ))}
       </div>
     </div>
  </div>
);

const Step6 = () => (
   <div className="flex flex-col gap-8">
     <div className="flex gap-2">
       <div className="flex-1 border border-gray-200 px-4 py-3.5 rounded-[12px] text-[16px] text-gray-400 shadow-sm bg-white">Mileage</div>
       <div className="w-[100px] border border-gray-200 px-4 py-3.5 rounded-[12px] flex items-center justify-between text-[16px] text-gray-800 shadow-sm bg-white">
         km <ChevronDown size={20} />
       </div>
     </div>
     <div className="flex flex-col gap-5">
       <label className="text-gray-800 text-[17px]">Color</label>
       <div className="grid grid-cols-4 gap-y-6">
         {[
           {c: 'bg-white border border-gray-300', n: 'White'}, {c: 'bg-black', n: 'Black'}, {c: 'bg-[#c0c0c0]', n: 'Silver'}, {c: 'bg-gray-500', n: 'Gray'},
           {c: 'bg-red-600', n: 'Red'}, {c: 'bg-[#800000]', n: 'Maroon'}, {c: 'bg-[#00ff00]', n: 'Green'}, {c: 'bg-yellow-400', n: 'Yellow'},
         ].map(o => (
           <div key={o.n} className="flex flex-col items-center gap-2">
             <div className={`w-12 h-12 rounded-full ${o.c} shadow-sm ring-[3.5px] ring-white border border-gray-200`}></div>
             <span className="text-[14px] text-gray-700">{o.n}</span>
           </div>
         ))}
       </div>
     </div>
     <div className="flex flex-col gap-4">
       <label className="text-gray-800 text-[17px]">Fuel Type</label>
       <div className="flex flex-wrap gap-2.5">
         {['gasoline', 'diesel', 'lpg', 'hybrid', 'electric'].map(o => (
           <div key={o} className="border border-gray-400 text-gray-800 px-5 py-2.5 rounded-full text-[15px]">{o}</div>
         ))}
       </div>
     </div>
  </div>
);

const Step7 = () => (
  <div className="flex flex-col gap-3">
    {['Private', 'Temporary', 'Commercial', 'Taxi'].map(o => (
      <div key={o} className="border border-gray-200 px-4 py-4 rounded-[12px] text-[16px] text-gray-800 shadow-sm">{o}</div>
    ))}
  </div>
);

const Step8 = () => (
  <div className="flex flex-col gap-3 pb-8">
    {['Baghdad', 'Nineveh', 'Basra', 'Erbil', 'Sulaymaniyah', 'Kirkuk', 'Duhok', 'Najaf'].map(o => (
      <div key={o} className="border border-gray-200 px-4 py-4 rounded-[12px] text-[16px] text-gray-800 shadow-sm">{o}</div>
    ))}
  </div>
);

const Step9 = () => (
  <div className="flex flex-col gap-3 pb-8">
    {['Clean Title', 'No Paint', '1 Part', '2 Parts', '3 Parts', '4 Parts', '5 Parts', '6 Parts'].map(o => (
      <div key={o} className="border border-gray-200 px-4 py-4 rounded-[12px] text-[16px] text-gray-800 shadow-sm">{o}</div>
    ))}
  </div>
);

const Step10 = () => (
  <div className="flex flex-col gap-4 pb-8">
    <label className="text-gray-800 text-[17px]">Extra Features</label>
    <div className="flex flex-wrap gap-2.5">
      {[
        'Parking Sensor', 'LED Headlights', 'Rear Camera', 'Sunroof', 'Head-Up Display', 
        '10 Airbags', 'ABS', 'Hill Holder', 'Rain Sensor', 'Smart Key System',
        'Electronic Parking Brake', 'Cruise Control', 'Wireless Charger', 'Electric Seats',
        'Seat Cooling', 'Seat Heating', 'Drive Mode', 'Remote Start', 'AWD'
      ].map(o => (
        <div key={o} className="border border-gray-400 text-gray-700 px-4 py-2 rounded-full text-[15px]">{o}</div>
      ))}
    </div>
  </div>
);

const Step11 = () => (
  <div className="flex flex-col gap-4">
    <label className="text-gray-800 text-[17px]">Write your description (optional)</label>
    <textarea 
      placeholder="Enter a description..." 
      className="w-full h-64 border border-gray-200 rounded-[12px] p-4 text-[16px] text-gray-800 outline-none resize-none shadow-sm"
    ></textarea>
  </div>
);

const Step12 = () => (
  <div className="flex flex-col gap-6">
     <div className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">Select Currency</label>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex justify-between items-center bg-white shadow-sm">
         <span className="text-[16px] text-gray-800">Dollar</span>
         <ChevronDown size={20} className="text-gray-500" />
       </div>
     </div>
     <div className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">Asking Price in Dollar</label>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex items-center bg-white shadow-sm gap-3">
         <DollarSign size={20} className="text-gray-400" />
         <span className="text-[16px] text-gray-400">Enter a price...</span>
       </div>
     </div>
     <div className="flex flex-col gap-3">
       <label className="text-gray-800 text-[17px]">Phone Number</label>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex items-center bg-white shadow-sm gap-3">
         <Phone size={20} className="text-gray-400" />
         <span className="text-[16px] text-gray-400">Enter your phone number...</span>
       </div>
       <div className="px-4 py-3.5 border border-gray-200 rounded-[12px] flex items-center bg-white shadow-sm gap-3 mt-1">
         <Phone size={20} className="text-gray-400" />
         <span className="text-[16px] text-gray-400">Enter your phone number... (Optional)</span>
       </div>
     </div>
  </div>
);

const Step13 = () => (
  <div className="flex flex-col -mx-4 -mt-8">
    <div className="relative w-full aspect-[4/3]">
      <img src={IMAGES.lc1} className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-black/60 rounded-full px-3 py-1 text-white text-[13px] tracking-wide">2 / 5</div>
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
      </div>
    </div>
    
    <div className="p-4 flex flex-col gap-1.5 bg-white">
      <h3 className="text-[17px] text-gray-700">Kia</h3>
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-normal text-gray-900 tracking-tight">Telluride 2024</h2>
        <span className="text-[24px] text-[#ef4444] tracking-tight">$369,000</span>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 px-4 mt-2 mb-8">
      {[
        {icon: <Cpu size={26} strokeWidth={1.5}/>, t: 'Engine 3.8'},
        {icon: <Gauge size={26} strokeWidth={1.5}/>, t: '6 Cylineder'},
        {icon: <Settings2 size={26} strokeWidth={1.5}/>, t: 'Automatic'},
        {icon: <Fuel size={26} strokeWidth={1.5}/>, t: 'Gasoline'},
        {icon: <Globe size={26} strokeWidth={1.5}/>, t: 'Specs US'},
        {icon: <LayoutGrid size={26} strokeWidth={1.5}/>, t: '4 4 km'},
      ].map((o,i) => (
        <div key={i} className="bg-[#f8f9fa] flex flex-col items-center justify-center py-4 rounded-[12px] gap-2 h-[84px]">
          <div className="text-gray-600">{o.icon}</div>
          <span className="text-[13px] text-gray-600 font-medium">{o.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const Step14 = () => (
  <div className="flex flex-col gap-4 pb-12">
    <div className="border-[1.5px] border-green-500 bg-green-50/20 rounded-[14px] p-5 shadow-sm relative">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <div className="text-orange-400 mt-1">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-orange-400 text-[13px] font-bold tracking-wider uppercase">STARTER</span>
            <span className="text-[28px] font-normal text-gray-900 leading-none">Free</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#1eab55] flex items-center justify-center text-white">
          <Check size={20} strokeWidth={3} />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 text-[15px] text-gray-700 items-center justify-center w-full pb-2">
        <span>Basic listing on Taban Cars</span>
        <span>Boosted on social media</span>
      </div>
    </div>

    <div className="border border-gray-200 bg-white rounded-[14px] p-5 shadow-sm">
      <div className="flex gap-4 mb-6">
        <div className="text-purple-600 mt-1">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-purple-500 text-[13px] font-bold tracking-wider uppercase">Private</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-normal text-gray-900 leading-none">10,000</span>
            <span className="text-[15px] text-gray-500">IQD</span>
          </div>
        </div>
      </div>
       <div className="flex flex-col gap-2.5 text-[15px] text-gray-700 items-center justify-center pb-2">
        <span>Basic listing on Taban Cars</span>
        <span>Boosted on social media</span>
      </div>
    </div>

    <div className="border border-gray-200 bg-white rounded-[14px] p-5 shadow-sm mb-4">
      <div className="flex gap-4 mb-6">
        <div className="text-blue-500 mt-1">
           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-blue-400 text-[13px] font-bold tracking-wider uppercase">PRO</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-normal text-gray-900 leading-none">60,000</span>
            <span className="text-[15px] text-gray-500">IQD</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 text-[15px] text-gray-700 items-center justify-center pb-4">
        <span>Basic listing on Taban Cars</span>
        <span>Sent to up to 20 active buyers</span>
      </div>
      <button className="w-full bg-[#1eab55] rounded-xl text-white font-medium py-3.5 text-[16px]">Next</button>
    </div>
  </div>
);

export const SellFlow = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);

  const steps = [
    { title: 'Where is your car?', subtitle: 'Select city or district?', content: <Step1 /> },
    { title: 'Let\'s upload photos', subtitle: 'Upload at least 4 photos of your car', content: <Step2 /> },
    { title: 'Basic Car Information', subtitle: 'Select information based on the car', content: <Step3 /> },
    { title: 'Technical Details', subtitle: 'Select the correct details', content: <Step4 /> },
    { title: 'Interior Details', subtitle: 'Select the correct details', content: <Step5 /> },
    { title: 'Other Details', subtitle: 'Select the correct details', content: <Step6 /> },
    { title: 'Plate Type', subtitle: 'Select your car plate type', content: <Step7 /> },
    { title: 'Plate City', subtitle: 'Select your car plate city', content: <Step8 /> },
    { title: 'Paint Parts', subtitle: 'Select if your car has any damaged parts', content: <Step9 /> },
    { title: 'Extra Features', subtitle: 'Select extra features of your car', content: <Step10 />, actionLabel: 'Skip', actionColor: '#6185d6' },
    { title: 'Description', subtitle: 'Enter your own description', content: <Step11 />, actionLabel: 'Skip', actionColor: '#6185d6' },
    { title: 'Asking Price', subtitle: 'Please enter the selling price of your car', content: <Step12 /> },
    { title: 'Review Ad', subtitle: 'Make sure all your car information are correct', content: <Step13 /> },
    { title: 'Select Type of listing', subtitle: 'List your car on Taban Cars marketplace and sell your car directly to buyers. Duration 90 days.', content: <Step14 /> }
  ];

  const current = steps[step];

  return (
    <div className="absolute inset-0 z-[200] bg-white flex flex-col h-[100dvh] w-full overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#6185d6] px-4 pt-12 pb-8 shrink-0 relative transition-all duration-300">
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => step > 0 ? setStep(step - 1) : onClose()} className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-sm">
            <ArrowLeft size={24} />
          </button>
          <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-gray-800 text-[15px] font-medium shadow-sm">
            <Phone size={18} /> Call for help
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-[28px] font-normal text-white tracking-wide">{current.title}</h1>
          <p className="text-white/90 text-[16px] mt-1.5 leading-snug">{current.subtitle}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-4 py-8">
          {current.content}
        </div>
      </div>

      {step !== 13 && (
        <div className="shrink-0 bg-white flex flex-col pb-safe">
          <div className="flex items-center justify-center px-4 pt-4">
            <ProgressBar currentStep={step} />
          </div>
          
          <div className="flex items-center justify-between p-4 px-6 pb-6">
            <button 
              onClick={() => step > 0 ? setStep(step - 1) : onClose()} 
              className="px-7 py-3 rounded-full border border-gray-200 text-[#6185d6] font-medium min-w-[100px] text-[16px]"
            >
              Prev
            </button>
            <button 
              onClick={() => step < steps.length - 1 ? setStep(step + 1) : onClose()} 
              className="px-10 py-3 rounded-full text-white font-medium shadow-md min-w-[100px] text-[16px] transition-colors"
              style={{ backgroundColor: current.actionColor || '#1eab55' }}
            >
              {current.actionLabel || 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
