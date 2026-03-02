import { Chip } from './Chip.tsx';
import { FilterCategory } from '../../../models';

export interface FilterCategoryChipsProps extends Pick<FilterCategory, 'label' | 'selectedItems'> {
  onRemove: (filterItemId: string) => void;
}

export const FilterChipsCategory = ({
  label,
  selectedItems,
  onRemove,
}: FilterCategoryChipsProps) => {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mr-1">
        {label}:
      </span>
      {selectedItems.map((item) => (
        <Chip key={item.id} filterItem={item} onRemove={() => onRemove(item.id)} />
      ))}
    </div>
  );
};
