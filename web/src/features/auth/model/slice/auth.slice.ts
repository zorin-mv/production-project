import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthSchema } from '../types/auth.schema';

const initialState: IAuthSchema = {
  email: '',
  password: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state: IAuthSchema, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: IAuthSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
