import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import ProfilePage from './profile-page';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;
const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
