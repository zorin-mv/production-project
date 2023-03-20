import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/profile';
import { IUserSchema } from 'entities/user/model/types/user';
import { IAuthSchema } from 'features/auth/model/types/auth.schema';

export interface IStateSchema {
  user: IUserSchema;
  // Async Reducers
  auth?: IAuthSchema;
  profile?: IProfileSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: AnyAction) => any;
  add: (key: TStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TStateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}
