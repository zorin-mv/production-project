import { createSelector } from '@reduxjs/toolkit';

import { ICounterSchema } from '../../types/counter.schema';
import { getCounter } from '../get-counter/get-counter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: ICounterSchema) => counter.value
);
