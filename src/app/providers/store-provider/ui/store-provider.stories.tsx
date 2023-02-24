import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreProvider } from './store-provider';

export default {
  title: 'folder??/StoreProvider',
  component: StoreProvider,
} as ComponentMeta<typeof StoreProvider>;
const Template: ComponentStory<typeof StoreProvider> = (args) => (
  <StoreProvider {...args} />
);

export const Default = Template.bind({});
Default.args = {};
