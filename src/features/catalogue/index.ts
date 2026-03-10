export {Catalogue} from './Catalogue';
export type {FilterCategory} from './types';

export {ProductList} from './components/productList/ProductList.tsx'
export {CatalogueGrid} from './components/catalogueGrid/CatalogueGrid.tsx'

export {default as catalogueReducer} from './api/catalogue-slice.ts';
export * from './api/catalogue-slice.ts';
export * from './api/catalogue-api.ts';
export * from './api/catalogue-selectors.ts';
