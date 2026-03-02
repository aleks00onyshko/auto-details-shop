import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks.ts';
import { deriveQueryParamsFromOtherFilterCategories } from '@features/catalogue/utils';

import {
  catalogueApi,
  selectCatalogueFilterCategoriesAsArray,
  updateFilterCategory,
} from '../../store';
import { FilterItem } from '../../models';
import { shallowEqual } from 'react-redux';

export const useFilterCategories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCatalogueFilterCategoriesAsArray, shallowEqual);

  useEffect(() => {
    const subscriptions = categories.map((category) => {
      return dispatch(
        catalogueApi.endpoints.getFilterCategoryData.initiate(
          {
            requestUrl: category.requestUrl,
            queryParams: deriveQueryParamsFromOtherFilterCategories(category.id, categories),
          },
          { subscribe: false }
        )
      );
    });

    return () => subscriptions.forEach((sub) => sub.unsubscribe());
  }, [categories]);

  const categoriesWithItems = categories.map((category) => {
    const { data: items = [], isFetching } =
      catalogueApi.endpoints.getFilterCategoryData.useQueryState({
        requestUrl: category.requestUrl,
        queryParams: deriveQueryParamsFromOtherFilterCategories(category.id, categories),
      });

    return { ...category, items, isLoading: isFetching };
  });

  const onCategoryChanged = useCallback(
    (categoryId: string, selectedItems: FilterItem[]) => {
      dispatch(
        updateFilterCategory({
          id: categoryId,
          selectedItemIds: selectedItems.map((i) => i.id),
          selectedItems,
        })
      );
    },
    [dispatch]
  );

  return { categories: categoriesWithItems, onCategoryChanged };
};
