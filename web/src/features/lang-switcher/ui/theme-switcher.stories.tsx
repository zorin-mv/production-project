import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LangSwitcher } from './lang-switcher';

export default {
  title: 'features/LangSwitcher',
  component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = () => <LangSwitcher />;

export const Default = Template.bind({});
Default.args = {};
