import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import { NavBar } from './navbar';

export default {
  title: 'widget/Navbar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const WithUser = Template.bind({});
WithUser.args = {};
WithUser.decorators = [
  StoreDecorator({
    user: {
      user: {
        id: '1',
      },
      token: 'test',
    },
  }),
];

export const WithoutUser = Template.bind({});
WithoutUser.args = {};
WithoutUser.decorators = [StoreDecorator({})];
