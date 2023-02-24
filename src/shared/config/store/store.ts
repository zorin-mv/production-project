import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter-component';

import { IStateSchema } from './state.schema';

export function createReduxStore(initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
