import { RootState } from '@store/index';

export const selectCurrentUser = (state: RootState) => state.authentication.user;
export const selectToken = (state: RootState) => state.authentication.token;
export const selectIsAuthenticated = (state: RootState) => state.authentication.isAuthenticated;
export const selectIsGuest = (state: RootState) => !state.authentication.isAuthenticated;
