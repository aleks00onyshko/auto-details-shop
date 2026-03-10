import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {PostResponse} from '../types/post.ts';
import {CommentResponse} from '../types/comment.ts';
import {ProductResponse} from '../types/product.ts';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse, number | void>({
      query: (limit = 0) => `posts?limit=${limit}`,
    }),
    getComments: builder.query<CommentResponse, number | void>({
      query: (limit = 0) => `comments?limit=${limit}`,
    }),
    getProducts: builder.query<ProductResponse, number | void>({
      query: (limit = 0) => `products?limit=${limit}`,
    }),
  }),
});

export const {useGetPostsQuery, useGetCommentsQuery, useGetProductsQuery} = dashboardApi;
