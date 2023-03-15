import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from 'features/auth/model/services/auth/auth.api';
import { IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData(state: IUserSchema, action: PayloadAction<IUserSchema>) {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    clearUserData() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.token;
          state.user = payload.user;
        }
      )
      .addMatcher(authApi.endpoints.logOut.matchRejected, (state) => {
        state.token = '';
        state.user = null;
      })
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state) => {
        state.token = '';
        state.user = null;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
