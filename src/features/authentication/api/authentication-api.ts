import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {User} from '@core';

import {authenticationSuccess} from './authentication-slice.ts';
import {UserCredentials} from '../types/user-credentials.ts';

export interface AuthenticationResponse extends User {
  accessToken: string;
  // TODO: think about implementing the refresh mechanism here
  refreshToken: string;
}

export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthenticationResponse, UserCredentials>({
      query: (_) => ({
        url: 'auth/login',
        method: 'POST',
        body: {
          // NOTE: we don't care actually about actual data entered by user, to get the token
          username: 'emilys',
          password: 'emilyspass',
        },
      }),
      async onQueryStarted(credentials, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;

          // NOTE: we move username back to the redux, to imitate login
          dispatch(authenticationSuccess({...data, username: credentials.username}));
        } catch (err) {
          // TODO: handle error better here
          console.error('Login failed', err);
        }
      },
    }),
    register: builder.mutation<User, UserCredentials>({
      query: (_) => ({
        url: 'users/add',
        method: 'POST',
        // Note: we don't care actually about add user request, we will have login afterwards anyways to have jwt
        body: _,
      }),
      async onQueryStarted(credentials, {dispatch, queryFulfilled}) {
        try {
          await queryFulfilled;

          const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: 'emilys', password: 'emilyspass'}),
          });
          const loginData = await res.json();

          // NOTE: we move username back to the redux, to imitate login
          dispatch(authenticationSuccess({...loginData, username: credentials.username}));
        } catch (err) {
          // TODO: better error handling here
          console.log('Register err', err);
        }
      },
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authenticationApi;
