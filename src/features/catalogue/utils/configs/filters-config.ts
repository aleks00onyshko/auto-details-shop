import { FilterCategory } from '../../models';

export const CAR_PARTS_FILTERS: FilterCategory[] = [
  {
    id: 'makers',
    label: 'Carmaker',
    selectedItemIds: [],
    selectedItems: [],
    requestUrl: 'c/d00b-fca6-4e51-be2a',
    isLoading: false,
    items: [],
  },
  {
    id: 'models',
    label: 'Model',
    selectedItemIds: [],
    selectedItems: [],
    requestUrl: 'c/f6b1-e6e0-4c86-983e',
    isLoading: false,
    items: [],
  },
  {
    id: 'engines',
    label: 'Engine',
    selectedItemIds: [],
    selectedItems: [],
    requestUrl: 'c/1539-1ae8-4e8a-a790',
    isLoading: false,
    items: [],
  },
];
