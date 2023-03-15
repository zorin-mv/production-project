import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from './spinner';

export default {
  title: 'shared/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});
Default.args = {};
