import { createApi } from '@reduxjs/toolkit/query/react';
import { IUserSchema } from 'entities/user/model/types/user';
import { baseQueryWithInterceptors } from 'shared/services/query/base-query-interceptor';

import { IAuthSchema } from '../../types/auth.schema';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithInterceptors,

  endpoints: (builder) => ({
    logIn: builder.mutation<IUserSchema, IAuthSchema>({
      query: (body) => ({
        url: '/user-auth/sign-in',
        method: 'POST',
        body,
      }),
    }),

    logOut: builder.query<{ message: string }, void>({
      query: () => ({
        url: '/user-auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLogInMutation, useLazyLogOutQuery } = authApi;
