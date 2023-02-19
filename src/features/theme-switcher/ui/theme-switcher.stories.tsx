import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeSwitcher } from './theme-switcher';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />;

export const Default = Template.bind({});
Default.args = {};
