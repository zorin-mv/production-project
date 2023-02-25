import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/store-provider';
import { IStateSchema } from 'shared/config/store';

export const StoreDecorator =
  (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
