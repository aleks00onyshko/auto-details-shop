import { FilterItem } from './filter-item.ts';

export interface FilterCategory {
  id: string;
  label: string;
  selectedItemIds: string[];
  requestUrl: string;
  items: FilterItem[];
  selectedItems: FilterItem[];
  isLoading: boolean;
}
