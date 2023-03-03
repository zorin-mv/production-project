import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SidebarItem } from './sidebar-item';

export default {
  title: 'folder??/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;
const Template: ComponentStory<typeof SidebarItem> = (args) => (
  <SidebarItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
