import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import { LoginModal } from './login-modal';

export default {
  title: 'features/auth/LoginModal',
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>;
const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
Default.decorators = [
  StoreDecorator({
    auth: {
      email: 'user@gmail.com',
      password: 'Password',
    },
  }),
];
Default.parameters = { loki: { skip: true } };
