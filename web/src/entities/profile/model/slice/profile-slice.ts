import { createSlice } from '@reduxjs/toolkit';

import { IProfileSchema } from '../types/profle';

const initialState: IProfileSchema = { readonly: true };

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
