import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TEXT_THEME } from './text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Some Title',
  text: 'Some Text',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Some Title',
  text: 'Some Text',
  theme: TEXT_THEME.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Some Title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Some Text',
};
