import React from 'react';
import { ChevronDown } from 'lucide-react';

const SelectInput = ({ label }: { label: string }) => (
  <div className="flex items-center justify-between border border-gray-400 rounded-xl px-4 py-3 bg-white text-gray-600">
    <span className="text-[15px]">{label}</span>
    <ChevronDown size={18} className="text-gray-500" />
  </div>
);

const PillButton = ({ label, active }: { label: string, active?: boolean }) => (
  <button className={`px-5 py-2.5 rounded-[10px] border font-medium text-[15px] ${active ? 'bg-[#5f84e8] text-white border-[#5f84e8]' : 'bg-white text-gray-700 border-gray-400'}`}>
    {label}
  </button>
);

export const SearchView = () => (
  <div className="flex flex-col pb-8 bg-white min-h-full">
    <div className="flex items-center justify-between px-4 pt-10 pb-4 border-b border-gray-100">
      <h1 className="text-3xl text-gray-800 font-normal">Search</h1>
      <button className="bg-red-50 text-red-500 px-4 py-2 rounded-full text-sm font-medium">Show 0 Cars</button>
    </div>

    <div className="px-4 py-6 flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-3">
        <SelectInput label="Model" />
        <SelectInput label="Trim" />
        <SelectInput label="From Year" />
        <SelectInput label="To Year" />
        <SelectInput label="Min Price" />
        <SelectInput label="Max Price" />
        <SelectInput label="Min Millage" />
        <SelectInput label="Max Millage" />
        <SelectInput label="Plate City" />
        <SelectInput label="Plate Type" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-700 text-[15px]">Condition</h3>
        <div className="flex flex-wrap gap-2.5">
          <PillButton label="All" active />
          <PillButton label="Used" />
          <PillButton label="New" />
          <PillButton label="Refurbished" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 py-6 border-t border-b border-gray-100">
        <SelectInput label="Engine Size" />
        <SelectInput label="Clyinder" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-700 text-[15px]">Transmission</h3>
        <div className="flex flex-wrap gap-2.5">
          <PillButton label="All" active />
          <PillButton label="Automatic" />
          <PillButton label="Manual" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-700 text-[15px]">Seat Material</h3>
        <div className="flex flex-wrap gap-2.5">
          <PillButton label="All" active />
          <PillButton label="Fabric" />
          <PillButton label="Leather" />
          <PillButton label="Mix" />
        </div>
      </div>
    </div>
  </div>
);
