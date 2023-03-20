import { createSlice } from '@reduxjs/toolkit';

import { IResponseError } from 'shared/types/error-response.typings';
import { IProfileSchema } from '../types/profle';

import { profileApi } from '../services/profile-api/profile.api';

const initialState: IProfileSchema = { readonly: true, isLoading: false };

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(profileApi.endpoints.fetchProfileByToken.matchPending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addMatcher(profileApi.endpoints.fetchProfileByToken.matchFulfilled, (state, { payload }) => {
        state.data = payload;
        state.error = undefined;
        state.isLoading = false;
      })
      .addMatcher(profileApi.endpoints.fetchProfileByToken.matchRejected, (state, { payload }) => {
        if (payload?.data) {
          state.error = (payload as IResponseError).data.message;
        } else {
          state.error = 'Something went wrong';
        }
        state.isLoading = false;
        state.data = undefined;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
