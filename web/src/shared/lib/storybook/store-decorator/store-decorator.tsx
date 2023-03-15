import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';
import { authReducer } from 'features/auth/model/slice/auth.slice';
import { IStateSchema } from 'shared/config/store';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
  auth: authReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
  ) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        withoutPersist
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
