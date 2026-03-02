import { SelectItem } from '../models/select-item.ts';
import { useState } from 'react';

export interface SelectOverlayProps {
  items: SelectItem[];
  selectedItemsIds: string[];
  onChange: (items: SelectItem[]) => void;
  loading: boolean;
}

export const SelectOverlay = ({
  items,
  selectedItemsIds,
  onChange,
  loading,
}: SelectOverlayProps) => {
  const [selectedElementsIds, setSelectedElementsIds] = useState<string[]>(selectedItemsIds);
  const handleElementSelectionChange = (
    elementId: string,
    checked: boolean,
    selectedIds: string[]
  ) => {
    const newSelectedElementsIds = checked
      ? [...selectedIds, elementId]
      : selectedIds.filter((id) => id !== elementId);

    setSelectedElementsIds(newSelectedElementsIds);

    onChange(items.filter((i) => newSelectedElementsIds.includes(i.id)));
  };

  return (
    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto py-1">
      {loading ? (
        <span>Loading...</span>
      ) : (
        items.map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedElementsIds.includes(item.id)}
              onChange={(e) => {
                handleElementSelectionChange(item.id, e.target.checked, selectedElementsIds);
              }}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-sm text-gray-700 capitalize select-none">{item.value}</span>
          </label>
        ))
      )}
    </div>
  );
};
