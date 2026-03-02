import { useRef, useState } from 'react';
import { SelectItem } from './models/select-item.ts';
import { SelectOverlay } from './components/select-overlay.tsx';
import { SelectTriggerButton } from './components/select-trigger-button.tsx';
import { useClickOutside } from '../../hooks/use-click-outside.ts';

export interface SelectProps<T extends SelectItem> {
  label: string;
  items: T[];
  selectedItemsIds: string[];
  onChange: (items: T[]) => void;
  loading: boolean;
}

export const Select = <T extends SelectItem>({
  items,
  selectedItemsIds,
  label,
  onChange,
  loading,
}: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>

      <div className="relative" ref={dropdownRef}>
        <SelectTriggerButton
          selectedCount={selectedItemsIds.length}
          isOpen={isOpen}
          onClickFn={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <SelectOverlay
            items={items}
            loading={loading}
            onChange={onChange as any}
            selectedItemsIds={selectedItemsIds}
          />
        )}
      </div>
    </div>
  );
};
