import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter smth...',
};
