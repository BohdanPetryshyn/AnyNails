import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, User } from '../entities/user';
import { tokenToUser } from '../utils/tokenToUser';
import { AppState } from '../../common/store/types';
import { classToPlain } from 'class-transformer';

interface AuthState {
  accessToken?: string | null;
  user?: User | null;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    accessTokenReceived(
      state,
      action: PayloadAction<{ accessToken: string | null }>,
    ) {
      const { accessToken } = action.payload;
      const user = accessToken == null ? null : tokenToUser(accessToken);

      state.accessToken = accessToken;
      state.user = classToPlain(user) as User;
    },
  },
});

export const { accessTokenReceived } = authSlice.actions;

export const selectAuthState = (state: AppState) => {
  return state.auth;
};
export const selectAccessToken = (state: AppState): string | null | undefined =>
  selectAuthState(state).accessToken;
export const selectUser = (state: AppState): User | null | undefined =>
  selectAuthState(state).user;
export const selectUserRole = (state: AppState): Role | null | undefined =>
  selectUser(state)?.role;
export const selectIsLoggedIn = (state: AppState): boolean =>
  Boolean(selectUserRole(state));

export const authReducer = authSlice.reducer;
