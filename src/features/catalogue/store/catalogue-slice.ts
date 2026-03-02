import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CAR_PARTS_FILTERS } from '../utils';
import { FilterCategory } from '../models';

export interface CatalogueState {
  filterCategories: Record<string, FilterCategory>;
  filtersPanelOpened: boolean;
}

export const initialState: CatalogueState = {
  filterCategories: CAR_PARTS_FILTERS.reduce(
    (acc, category) => {
      return {
        ...acc,
        [category.id]: category,
      };
    },
    {} as Record<string, FilterCategory>
  ),
  filtersPanelOpened: true,
};

export const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    updateFilterCategory: (
      state,
      {
        payload: { id, selectedItems, selectedItemIds },
      }: PayloadAction<Pick<FilterCategory, 'id' | 'selectedItems' | 'selectedItemIds'>>
    ) => {
      state.filterCategories[id] = {
        ...state.filterCategories[id],
        selectedItems,
        selectedItemIds,
      };
    },
    removeFilterCategoryItem: (
      state,
      {
        payload: { categoryId, filterItemId },
      }: PayloadAction<{
        categoryId: string;
        filterItemId: string;
      }>
    ) => {
      const targetCategory = state.filterCategories[categoryId];

      targetCategory.selectedItems = targetCategory.selectedItems.filter(
        (el) => el.id !== filterItemId
      );
      targetCategory.selectedItemIds = targetCategory.selectedItemIds.filter(
        (el) => el !== filterItemId
      );
    },
    setFilterPanelOpened: (state, action: PayloadAction<boolean>) => {
      state.filtersPanelOpened = action.payload;
    },
    clearFilters: (_) => {
      return { ...initialState };
    },
  },
});

export const {
  updateFilterCategory,
  clearFilters,
  removeFilterCategoryItem,
  setFilterPanelOpened,
} = catalogueSlice.actions;
export default catalogueSlice.reducer;
