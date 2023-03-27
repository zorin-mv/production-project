import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import { ProfileHeader } from './profile-header';

export default {
  title: 'feature/ProfileForm/ProfileHeader',
  component: ProfileHeader,
} as ComponentMeta<typeof ProfileHeader>;
const Template: ComponentStory<typeof ProfileHeader> = (args) => <ProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
