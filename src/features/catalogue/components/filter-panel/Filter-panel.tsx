import { Select } from '@shared/components';
import { FilterCategory, FilterItem } from '../../models';

export interface FilterPanelProps {
  filterCategories: FilterCategory[];
  onFilterChanged: (categoryId: string, selectedItems: FilterItem[]) => void;
  onClose?: () => void;
}

export const FilterPanel = ({ filterCategories, onFilterChanged, onClose }: FilterPanelProps) => {
  return (
    <aside className="w-[300px] h-full bg-white border-l border-gray-100 p-6 flex flex-col gap-8 flex-shrink-0">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-slate-800">Find your car parts</h2>

        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-gray-600 text-xl transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex flex-col gap-6">
        {filterCategories.map((category) => (
          <Select
            key={category.id}
            label={category.label}
            loading={category.isLoading}
            items={category.items}
            selectedItemsIds={category.selectedItemIds}
            onChange={(items: FilterItem[]) => onFilterChanged(category.id, items)}
          />
        ))}
      </div>
    </aside>
  );
};
