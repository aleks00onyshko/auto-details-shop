import { FilterCategory } from '../../models';

export function convertFilterCategoriesToQueryParams(categories: FilterCategory[]): string {
  return categories
    .filter((cat) => cat.selectedItemIds.length !== 0)
    .map((cat) => `${cat.id}=${cat.selectedItemIds.join(',')}`)
    .join('&');
}

export function deriveQueryParamsFromOtherFilterCategories(
  targetCategoryId: string,
  allCategories: FilterCategory[]
): string {
  return convertFilterCategoriesToQueryParams(
    allCategories.filter((cat) => cat.id !== targetCategoryId)
  );
}
