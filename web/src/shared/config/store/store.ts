import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { profileApi } from 'entities/profile';
import { userReducer } from 'entities/user';
import { authApi } from 'features/auth';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createReducerManager } from './reducer-manager';
import { IReduxStoreWithManager, IStateSchema } from './state.schema';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
): {
  persistor: Persistor;
  store: IReduxStoreWithManager;
} {
  const reducers = {
    ...asyncReducers,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  };

  const reduceManager = createReducerManager(reducers);

  const persistedReducer = persistReducer(persistConfig, reduceManager.reduce as Reducer<CombinedState<IStateSchema>>);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(authApi.middleware, profileApi.middleware),
  });
  // @ts-ignore
  store.reducerManager = reduceManager;

  const persistor = persistStore(store);

  return {
    persistor,
    // @ts-ignore
    store,
  };
}
