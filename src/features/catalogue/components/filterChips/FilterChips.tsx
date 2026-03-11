import { ReactNode } from 'react';

export interface FilterChipsProps {
  children: ReactNode[];
  onClearAll: () => void;
}

export const FilterChips = ({ children, onClearAll }: FilterChipsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2 z-[130] w-full bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 lg:px-8 py-3 shadow-sm transition-all duration-300">
      <div className="flex items-center gap-3 w-full">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-200 pr-4 py-1 hidden sm:block">
          Active
        </span>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-1">{children}</div>

        <button
          onClick={onClearAll}
          className="text-[11px] text-slate-500 hover:text-red-600 font-bold uppercase tracking-wide transition-colors whitespace-nowrap px-2"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
