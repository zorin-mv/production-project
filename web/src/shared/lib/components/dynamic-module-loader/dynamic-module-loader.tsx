import { Reducer } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import {
  IReduxStoreWithManager,
  TStateSchemaKey,
} from 'shared/config/store/state.schema';

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer;
};

type TReducersListEntry = [TStateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as IReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: TReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]: TReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};
