import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import { LoginForm } from './login-form';

export default {
  title: 'features/auth/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;
const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({
    auth: {
      email: 'user@gmail.com',
      password: 'Password',
    },
  }),
];
