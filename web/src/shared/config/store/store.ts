import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from 'features/auth/model/services/auth/auth.api';
import { createReducerManager } from './reducer-manager';
import { IReduxStoreWithManager, IStateSchema } from './state.schema';

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
): {
  persistor: Persistor;
  store: IReduxStoreWithManager;
} {
  const reducers = {
    ...asyncReducers,
    user: persistReducer({ key: 'user', storage }, userReducer),
    [authApi.reducerPath]: authApi.reducer,
  };

  const reduceManager = createReducerManager(reducers);

  const store = configureStore({
    reducer: reduceManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        authApi.middleware
      ),
  });

  (store as IReduxStoreWithManager).reducerManager = reduceManager;

  const persistor = persistStore(store);

  return {
    persistor,
    store: store as IReduxStoreWithManager,
  };
}
