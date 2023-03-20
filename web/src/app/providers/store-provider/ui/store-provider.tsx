import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createReduxStore, IStateSchema } from 'shared/config/store';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  withoutPersist?: boolean;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider = ({
  children,
  initialState,
  withoutPersist = true,
  asyncReducers,
}: IStoreProviderProps) => {
  const { persistor, store } = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>
  );

  if (withoutPersist) {
    return <Provider store={store}>{children}</Provider>;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
