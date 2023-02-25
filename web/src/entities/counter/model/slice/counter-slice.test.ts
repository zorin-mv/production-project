import { counterReducer } from 'entities/counter';

import { ICounterSchema } from '../types/counter.schema';
import { counterActions } from './counter.slice';

describe('counter-slice', () => {
  test('test decrement', () => {
    const state: ICounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decremented)).toEqual({
      value: 9,
    });
  });

  test('test increment', () => {
    const state: ICounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.incremented)).toEqual({
      value: 11,
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.incremented)).toEqual({
      value: 1,
    });
  });
});
