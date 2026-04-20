import React, { useState } from 'react';
import { ChevronLeft, Car, MapPin, CheckCircle2, Clock, DollarSign, Image as ImageIcon, Edit2, Gauge, Calendar, Eye, User, MessageSquare, MessageCircle, AlertCircle, LayoutGrid } from 'lucide-react';
import { IMAGES } from '../data/mockData';

export const MyPostsView = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('available');

  return (
    <div className="bg-[#fbfcff] min-h-full font-sans pb-10 flex flex-col pt-8" dir="rtl">
      {/* Header */}
      <div className="px-4 py-2 flex items-center shrink-0 w-full mb-3">
        <button onClick={onBack} className="p-2 -mr-2 cursor-pointer relative z-10 active:opacity-50">
          <ChevronLeft size={28} className="text-black stroke-[2.5]" />
        </button>
        <h1 className="text-[20px] font-bold text-gray-900 absolute left-0 right-0 text-center">پڕۆفایلی من</h1>
      </div>

      <div className="px-4 flex flex-col gap-5">
        {/* Summary Card */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-4 flex flex-col items-center justify-center gap-4 border border-gray-50 py-6">
          <div className="bg-red-50 text-[#cb3239] px-4 py-1.5 rounded-full text-[15px] font-medium flex items-center gap-2 border border-red-100">
            پۆست 4 <Car size={18} />
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-[14px]">
             <MapPin size={16} /> هەولێر، کوردستان
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-6 grid grid-cols-3 divide-x divide-x-reverse divide-gray-100 border border-gray-50">
           <div className="flex flex-col items-center justify-center gap-3">
             <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#22c55e] border border-green-100">
                <CheckCircle2 size={24} />
             </div>
             <div className="text-[22px] font-bold text-gray-800 leading-none">4</div>
             <div className="text-[13px] text-gray-500">بەردەست</div>
           </div>
           
           <div className="flex flex-col items-center justify-center gap-3">
             <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#f59e0b] border border-orange-100">
                <Clock size={24} />
             </div>
             <div className="text-[22px] font-bold text-gray-800 leading-none">0</div>
             <div className="text-[13px] text-gray-500">چاوەڕوانی</div>
           </div>

           <div className="flex flex-col items-center justify-center gap-3">
             <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#3b82f6] border border-blue-100">
                <DollarSign size={24} />
             </div>
             <div className="text-[22px] font-bold text-gray-800 leading-none">0</div>
             <div className="text-[13px] text-gray-500">فرۆشراو</div>
           </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-1.5 flex border border-gray-50">
           <button 
             onClick={() => setActiveTab('available')}
             className={`flex-1 py-3 rounded-[14px] text-[15px] font-medium transition-colors ${activeTab === 'available' ? 'bg-[#cb3239] text-white shadow-sm' : 'text-gray-600'}`}>
             بەردەستەکان
           </button>
           <button 
             onClick={() => setActiveTab('pending')}
             className={`flex-1 py-3 rounded-[14px] text-[15px] font-medium transition-colors ${activeTab === 'pending' ? 'bg-[#cb3239] text-white shadow-sm' : 'text-gray-600'}`}>
             چاوەڕوانی
           </button>
           <button 
             onClick={() => setActiveTab('sold')}
             className={`flex-1 py-3 rounded-[14px] text-[15px] font-medium transition-colors ${activeTab === 'sold' ? 'bg-[#cb3239] text-white shadow-sm' : 'text-gray-600'}`}>
             فرۆشراو
           </button>
        </div>

        {/* Post Card */}
        {activeTab === 'available' && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col mb-4">
            <div className="relative h-[230px] w-full">
              <img src={IMAGES.merc} className="w-full h-full object-cover" alt="Car" />
              
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1.5 rounded-lg text-[13px] flex items-center gap-1.5 leading-none" dir="ltr">
                <ImageIcon size={15} className="mb-[1px]" /> <span>8</span>
              </div>
              
              <div className="absolute top-3 left-3 bg-[#22c55e] text-white px-3 py-1.5 rounded-full text-[13px] font-medium flex items-center gap-1.5 shadow-sm leading-none">
                <CheckCircle2 size={15} className="mb-[1px]" /> <span>بەردەستە</span>
              </div>
            </div>

            <div className="p-4 pt-5 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                 <div className="bg-red-50 text-[#cb3239] px-4 py-2 rounded-xl text-[16px] font-bold border border-red-100 self-center">
                   وەرەقە 86
                 </div>
                 <div className="flex flex-col gap-2.5">
                    <button className="bg-[#3b82f6] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-[14.5px] font-medium flex items-center justify-center gap-2 shadow-sm transition-colors w-[110px]">
                       <Edit2 size={16} /> <span>گۆڕین</span>
                    </button>
                    <button className="bg-[#22c55e] hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-[14.5px] font-medium flex items-center justify-center gap-2 shadow-sm transition-colors w-[110px]">
                       <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center"><DollarSign size={10} strokeWidth={3} /></span> <span>فرۆشراو</span>
                    </button>
                 </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                 <div className="bg-gray-50 px-3.5 py-2 rounded-xl text-gray-500 text-[13.5px] flex items-center gap-2 border border-gray-100">
                    <Calendar size={15} /> 2007
                 </div>
                 <div className="bg-gray-50 px-3.5 py-2 rounded-xl text-gray-500 text-[13.5px] flex items-center gap-2 border border-gray-100">
                    <Gauge size={15} /> 234 km
                 </div>
              </div>

              <div className="flex items-center justify-between text-gray-400 text-[13.5px] pt-2">
                 <div className="flex items-center gap-1.5">
                    <Calendar size={15} /> ئەمڕۆ
                 </div>
                 <div className="flex items-center gap-1.5">
                    بینین 2 <Eye size={15} />
                 </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab !== 'available' && (
          <div className="py-12 text-center text-gray-400 text-[15px]">هیچ پۆستێک نییە</div>
        )}

      </div>
    </div>
  );
};

export const ProfileView = ({ onSellClick, onPostsClick, postView, setPostView }: { onSellClick: () => void, onPostsClick: () => void, postView: 'grid' | 'list', setPostView: (val: 'grid'|'list') => void }) => (
  <div className="bg-[#fbfcff] min-h-full pb-10 font-sans" dir="rtl">
    {/* Profile Header */}
    <div className="px-5 pt-8 pb-6">
      <div className="flex items-start gap-4">
        <img src={IMAGES.profile} className="w-[72px] h-[72px] rounded-full object-cover shadow-sm bg-gray-100" alt="profile" />
        <div className="flex flex-col pt-1">
          <h2 className="text-[22px] font-normal text-gray-800">Muhammad is</h2>
          <div className="text-[15px] text-gray-500 font-normal leading-tight mt-1">+9647801353915</div>
          <div className="text-[15px] text-gray-500 font-normal leading-tight mt-1" dir="ltr">Welcome back to Taban Cars</div>
        </div>
      </div>
    </div>

    {/* Section 1 */}
    <div className="px-5 pt-2">
      <h3 className="text-[19px] text-gray-800 mb-4 font-normal" style={{ fontFamily: 'system-ui' }}>کردارە باوەکان</h3>
      <div className="grid grid-cols-3 gap-3">
        <div onClick={onPostsClick} className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-4 gap-3 aspect-square cursor-pointer active:scale-95 transition-transform">
          <User size={30} className="text-gray-800" strokeWidth={1.5} />
          <span className="text-[15px] text-gray-800 font-normal">پۆستەکان</span>
        </div>
        
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-4 gap-3 aspect-square cursor-pointer active:scale-95 transition-transform">
          <MessageSquare size={30} className="text-gray-800" strokeWidth={1.5} />
          <span className="text-[15px] text-gray-800 font-normal">چات</span>
        </div>
        
        <div onClick={onSellClick} className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-4 gap-3 aspect-square cursor-pointer active:scale-95 transition-transform">
          <div className="relative">
            <Car size={32} className="text-gray-800" strokeWidth={1.5} />
            <div className="absolute -top-1.5 -left-1 text-gray-800 text-[11px] font-medium bg-white rounded-full w-3.5 h-3.5 flex items-center justify-center border border-gray-800">$</div>
          </div>
          <span className="text-[15px] text-gray-800 font-normal">فرۆشتن</span>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="px-5 mt-4">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-5">
        <div className="w-10 h-10 flex items-center">
           <svg width="28" height="28" viewBox="0 0 24 24" fill="#ea4335" xmlns="http://www.w3.org/2000/svg">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
        </div>
        <div className="text-[16px] text-gray-800 mt-2 font-normal">ئۆتۆمبێلە دڵخوازەکانم</div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="px-5 mt-4 mb-8">
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-3 gap-3 aspect-square">
          <div className="relative mt-1">
             <MessageCircle size={30} className="text-[#9ca3af]" strokeWidth={1.5} />
             <div className="absolute inset-0 flex items-center justify-center text-[#9ca3af] text-[13px] font-bold mb-1">?</div>
          </div>
          <span className="text-[14px] text-gray-800 font-normal leading-tight text-center">ڕەخنە و<br/>پێشنیار</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-4 gap-3 aspect-square">
          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
               <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
             </svg>
             <div className="absolute inset-0 flex items-center justify-center text-[#9ca3af] font-bold text-[14px]">!</div>
          </div>
          <span className="text-[15px] text-gray-800 font-normal">غرامەکان</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-4 gap-3 aspect-square">
          <div className="relative">
            <AlertCircle size={30} className="text-[#9ca3af]" strokeWidth={1} />
          </div>
          <span className="text-[15px] text-gray-800 font-normal">دەربارە</span>
        </div>
      </div>
    </div>

    {/* Section 4 */}
    <div className="px-5 mb-6">
       <h3 className="text-[19px] text-gray-800 mb-5 font-normal">ڕووکاری ئەپ</h3>
       <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="text-gray-700">
                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <span className="text-[16px] text-gray-800 font-normal">ڕووکاری پۆست</span>
             </div>
             
             <div className="flex items-center gap-1.5" dir="ltr">
                 <div onClick={() => setPostView('grid')} className={`w-[34px] h-[34px] rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm ${postView === 'grid' ? 'bg-[#cb3239] text-white' : 'text-gray-800 border border-gray-200'}`}>
                    <LayoutGrid size={16} strokeWidth={2}/>
                 </div>
                 <div onClick={() => setPostView('list')} className={`w-[34px] h-[34px] rounded-full flex items-center justify-center cursor-pointer transition-colors ${postView === 'list' ? 'bg-[#cb3239] text-white shadow-sm' : 'text-gray-800'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                 </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);
