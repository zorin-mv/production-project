import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'shared/config/store';

import { getCounter } from './get-counter';

describe('get-counter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
  });
});
