import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types/store';
import { RootState } from './store';

const initialState: AuthState = {
  isUser: false,
  isAdmin: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; role: string }>) {
      state.token = action.payload.token;
      state.isUser = true;
      state.isAdmin = action.payload.role === 'admin';
    },
    logout(state) {
      state.token = null;
      state.isUser = false;
      state.isAdmin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
