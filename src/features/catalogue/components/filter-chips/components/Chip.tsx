import { MouseEvent } from 'react';

import { FilterItem } from '../../../models';

export interface ChipProps {
  filterItem: FilterItem;
  onRemove: () => void;
}

export const Chip = ({ filterItem, onRemove }: ChipProps) => {
  return (
    <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 cursor-pointer text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium group transition-all hover:bg-blue-100">
      <span className="capitalize">{filterItem.value}</span>
      <button
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          onRemove();
        }}
        className="text-blue-400 hover:text-blue-800 transition-colors p-0.5 rounded-full hover:bg-blue-200"
        aria-label={`Remove ${filterItem.value}`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
