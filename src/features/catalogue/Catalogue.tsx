import {Outlet} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '@store';

import {useCatalogueNavigation, useFilterCategories} from './utils';
import {clearFilters, removeFilterCategoryItem, setFilterPanelOpened,} from './api/catalogue-slice.ts';
import {FilterChips} from './components/filterChips/FilterChips';
import {FilterChipsCategory} from './components/filterChips/FilterChipsCategory';
import {FilterPanel} from './components/filterPanel/FilterPanel';
import {
  selectCatalogueFilterCategoriesAsArray,
  selectCatalogueFiltersActive,
  selectCatalogueFiltersPanelOpened
} from './api/catalogue-selectors.ts';

export const Catalogue = () => {
  const dispatch = useAppDispatch();
  const {categories, onCategoryChanged} = useFilterCategories();

  useCatalogueNavigation();

  const filterCategories = useAppSelector(selectCatalogueFilterCategoriesAsArray);
  const filtersActive = useAppSelector(selectCatalogueFiltersActive);
  const filterPanelOpened = useAppSelector(selectCatalogueFiltersPanelOpened);

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] w-full bg-gray-50 overflow-hidden">
      <div className="sticky top-0 z-[49]">
        {filtersActive && (
          <FilterChips onClearAll={() => dispatch(clearFilters())}>
            {filterCategories
              .filter((category) => category.selectedItems.length > 0)
              .map((category) => (
                <FilterChipsCategory
                  key={category.id}
                  label={category.label}
                  selectedItems={category.selectedItems}
                  onRemove={(filterItemId: string) =>
                    dispatch(removeFilterCategoryItem({categoryId: category.id, filterItemId}))
                  }
                />
              ))}
          </FilterChips>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">
        {filterPanelOpened && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => dispatch(setFilterPanelOpened(false))}
          />
        )}

        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="lg:hidden px-4 pt-4">
            <button
              onClick={() => dispatch(setFilterPanelOpened(true))}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>🔍</span> Filters{' '}
              {filtersActive && (
                <span className="bg-blue-500 text-white text-xs rounded-full px-2">•</span>
              )}
            </button>
          </div>

          <div className="p-4 lg:p-8 max-w-7xl mx-auto w-full flex-1">
            <Outlet/>
          </div>
        </main>

        {filterPanelOpened && (
          <div
            className={`
              fixed inset-y-0 right-0 z-50 transition-transform duration-300
               lg:relative lg:translate-x-0 h-full
             `}
          >
            <FilterPanel
              filterCategories={categories}
              onFilterChanged={onCategoryChanged}
              onClose={() => dispatch(setFilterPanelOpened(false))}
            />
          </div>
        )}
      </div>
    </div>
  );
};
