import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, IStateSchema } from 'shared/config/store';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider = ({
  children,
  initialState,
}: IStoreProviderProps) => {
  const store = createReduxStore(initialState as IStateSchema);
  return <Provider store={store}>{children}</Provider>;
};
