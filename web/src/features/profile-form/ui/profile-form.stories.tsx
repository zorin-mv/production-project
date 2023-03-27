import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import { ProfileForm } from './profile-form';

export default {
  title: 'feature/ProfileForm',
  component: ProfileForm,
} as ComponentMeta<typeof ProfileForm>;
const Template: ComponentStory<typeof ProfileForm> = (args) => <ProfileForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
