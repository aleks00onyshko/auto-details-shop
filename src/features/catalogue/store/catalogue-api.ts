import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Category, FilterItem, Product } from '../models';

export const catalogueApi = createApi({
  reducerPath: 'catalogueApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'c/b18d-d7b7-4bf1-b479',
    }),
    getProducts: builder.query<Product[], { category?: string; queryParams?: string }>({
      query: ({ queryParams }) => {
        return `c/f054-04ae-4c3e-b07b${queryParams ? `?${queryParams}` : ''}`;
      },
    }),
    getFilterCategoryData: builder.query<FilterItem[], { requestUrl: string; queryParams: string }>(
      {
        query: ({ requestUrl, queryParams }) => {
          return {
            url: queryParams ? `${requestUrl}?${queryParams}` : requestUrl,
          };
        },
      }
    ),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = catalogueApi;
