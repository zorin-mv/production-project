import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createReduxStore, IStateSchema } from 'shared/config/store';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  withoutPersist?: boolean;
}

export const StoreProvider = ({
  children,
  initialState,
  withoutPersist = false,
}: IStoreProviderProps) => {
  const createdStore = createReduxStore(initialState as IStateSchema);

  if (withoutPersist) {
    return <Provider store={createdStore}>{children}</Provider>;
  }

  const persistor = persistStore(createdStore);
  return (
    <Provider store={createdStore}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
