import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile } from 'entities/profile/model/types/profle';

import { IProfileSchema } from '../types/profle';

import { profileApi } from '../services/profile-api/profile.api';

const initialState: IProfileSchema = {
  readonly: true,
  data: {
    age: 0,
    avatar: '',
    city: '',
    country: '',
    currency: 'USD',
    firstName: '',
    lastName: '',
    id: '',
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state: IProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state: IProfileSchema, action: PayloadAction<IProfile>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(profileApi.endpoints.fetchProfileByToken.matchFulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
