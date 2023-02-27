import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { authReducer } from 'features/auth';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authApi } from 'features/auth/model/services/auth/auth.api';
import { IStateSchema } from './state.schema';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['counter', 'auth', 'authApi'],
};

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function createReduxStore(initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: persistedReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        authApi.middleware
      ),
  });
}
