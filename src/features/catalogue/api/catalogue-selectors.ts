import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '@store';
import {convertFilterCategoriesToQueryParams} from '../utils';

export const selectCatalogueFilterCategoriesDictionary = (state: RootState) =>
  state.catalogue.filterCategories;
export const selectCatalogueFilterCategoriesAsArray = createSelector(
  selectCatalogueFilterCategoriesDictionary,
  (dictionary) => Object.values(dictionary)
);
export const selectCatalogueFiltersActive = createSelector(
  selectCatalogueFilterCategoriesAsArray,
  (filterCategories) => filterCategories.filter((cat) => cat.selectedItems.length > 0).length > 0
);
export const selectCatalogueFiltersAsQueryParams = createSelector(
  selectCatalogueFilterCategoriesAsArray,
  (filterCategories) => convertFilterCategoriesToQueryParams(filterCategories)
);
export const selectCatalogueFiltersPanelOpened = (state: RootState) =>
  state.catalogue.filtersPanelOpened;
