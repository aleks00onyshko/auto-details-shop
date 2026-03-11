import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {User} from '@core';

import {AuthenticationResponse} from './authentication-api.ts';

interface AuthenticationState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    authenticationSuccess: (state, {payload}: PayloadAction<AuthenticationResponse>) => {
      state.user = payload;
      state.token = payload.accessToken;
      state.isAuthenticated = true;
    },
    logout: (_) => {
      return initialState;
    },
  },
});

export const {authenticationSuccess, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
