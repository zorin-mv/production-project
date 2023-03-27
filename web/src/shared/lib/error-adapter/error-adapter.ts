import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { IResponseError } from 'shared/types/error-response.typings';

export const errorAdapter = (error: FetchBaseQueryError | SerializedError) => {
  let errorMessage = 'Something went wrong';

  if ('data' in error) {
    errorMessage = (error as IResponseError).data?.message || 'Something went wrong';
  }

  return errorMessage;
};
