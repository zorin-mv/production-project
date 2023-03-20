import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithInterceptors } from 'shared/services/query/base-query-interceptor';

import { IProfile } from '../../types/profle';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: baseQueryWithInterceptors,

  endpoints: (builder) => ({
    fetchProfileByToken: builder.query<IProfile, void>({
      query: (body) => ({
        url: '/user-profile/get-user-profile-by-token',
        method: 'GET',
        body,
      }),
    }),
  }),
});

export const { useFetchProfileByTokenQuery } = profileApi;
