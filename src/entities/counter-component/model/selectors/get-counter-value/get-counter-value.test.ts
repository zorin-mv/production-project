import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'shared/config/store';

import { getCounterValue } from './get-counter-value';

describe('get-counter-value', () => {
  test('should return counter value', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as IStateSchema)).toEqual(10);
  });
});
