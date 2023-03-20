import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainIcon from 'shared/assets/icons/main-page.svg';
import { RoutePath } from 'shared/constant/app-routes';

import { SidebarItem } from './sidebar-item';

export default {
  title: 'widget/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;
const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'mainPageNav',
  },
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  item: {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'mainPageNav',
  },
  collapsed: true,
};
