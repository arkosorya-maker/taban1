import React, { useState } from 'react';
import { Home, Search, MapPin, Car, LayoutGrid, Settings } from 'lucide-react';

import { HomeView } from './views/HomeView';
import { SearchView } from './views/SearchView';
import { ProfileView, MyPostsView } from './views/ProfileAndPostsView';
import { CompanyListView, CompanyProfileView } from './views/CompanyViews';
import { DetailsView } from './views/DetailsView';
import { SellFlow } from './views/SellFlow';
import { NavItem } from './components/ui/NavItem';
import { LocationModal } from './components/modals/LocationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isSelling, setIsSelling] = useState(false);
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [postView, setPostView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="w-full max-w-md mx-auto bg-gray-50 h-[100dvh] relative shadow-2xl overflow-hidden font-sans text-gray-900 border-x border-gray-200 flex flex-col">
      
      {isSelling && <SellFlow onClose={() => setIsSelling(false)} />}
      
      {/* Location Modal */}
      {isLocationModalOpen && <LocationModal onClose={() => setIsLocationModalOpen(false)} />}

      {/* Fixed Top Header (Visible globally unless in Detail view maybe? Let's show it only on main tabs) */}
      {!selectedCar && !selectedCompany && !isSelling && activeTab === 'home' && !showMyPosts && (
        <div className="flex items-center justify-between px-4 py-3 bg-white z-40 shrink-0 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsLocationModalOpen(true)}
              className="w-11 h-11 bg-[#b3191f] text-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(179,25,31,0.2)]"
            >
              <MapPin size={22} strokeWidth={2} />
            </button>
            <button 
              onClick={() => setIsSelling(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f5f5f5] rounded-full text-[#b3191f] hover:bg-gray-200 transition-colors">
              <span className="text-[15px] font-bold pb-0.5 pt-0.5">فرۆشتن</span>
              <div className="relative">
                <Car size={20} className="fill-[#b3191f]" />
                {/* little dollar sign mock */}
                <div className="absolute -top-1.5 -right-2 text-[#b3191f] text-[9px] font-bold bg-white rounded-full w-3.5 h-3.5 flex items-center justify-center border-[1.5px] border-[#b3191f]">$</div>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[20px] font-bold text-gray-900 tracking-tight">Taban Cars</span>
            <div className="w-12 h-12 bg-[#b3191f] rounded-full flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(179,25,31,0.2)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8C20 9.10457 19.1046 10 18 10H16.5L14 20H10L7.5 10H6C4.89543 10 4 9.10457 4 8Z" fill="white"/>
                <line x1="12" y1="6" x2="12" y2="20" stroke="#b3191f" strokeWidth="2.5"/>
              </svg>
            </div>
          </div>
        </div>
      )}

      {showMyPosts && !isSelling ? (
        <div className="flex-1 overflow-y-auto no-scrollbar"><MyPostsView onBack={() => setShowMyPosts(false)} /></div>
      ) : (selectedCar || selectedCompany) && !isSelling ? (
        selectedCar ? <DetailsView car={selectedCar} onBack={() => setSelectedCar(null)} /> :
        selectedCompany ? <CompanyProfileView company={selectedCompany} onBack={() => setSelectedCompany(null)} onCarClick={setSelectedCar} /> : null
      ) : (
        <div className="flex flex-col flex-1 overflow-hidden relative">
          <div className="flex-1 overflow-y-auto no-scrollbar pb-20 bg-gray-50">
            {activeTab === 'home' && <HomeView onCarClick={setSelectedCar} postView={postView} />}
            {activeTab === 'companies' && <CompanyListView onCompanyClick={setSelectedCompany} />}
            {activeTab === 'search' && <SearchView />}
            {activeTab === 'settings' && <ProfileView onSellClick={() => setIsSelling(true)} onPostsClick={() => setShowMyPosts(true)} postView={postView} setPostView={setPostView} />}
          </div>
          
          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 flex justify-around items-center h-16 px-2 z-40 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            <NavItem icon={<Home size={22} />} label="Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavItem icon={<LayoutGrid size={22} />} label="Companies" active={activeTab === 'companies'} onClick={() => setActiveTab('companies')} />
            <NavItem icon={<div className={`${activeTab === 'search' ? 'bg-[#5f84e8] text-white rounded-full p-1' : ''}`}><Search size={20} strokeWidth={activeTab === 'search' ? 3 : 2} fill={activeTab === 'search' ? 'currentColor' : 'none'} /></div>} label="Search" active={activeTab === 'search'} onClick={() => setActiveTab('search')} />
            <NavItem icon={<Settings size={22} />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
          </div>
        </div>
      )}
    </div>
  );
}
