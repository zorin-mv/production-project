import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';
import { profileReducer } from 'entities/profile';
import { authReducer } from 'features/auth/model/slice/auth.slice';
import { IStateSchema } from 'shared/config/store';
import { TReducersList } from 'shared/lib/components/dynamic-module-loader';

const defaultAsyncReducers: TReducersList = {
  auth: authReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} withoutPersist asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
