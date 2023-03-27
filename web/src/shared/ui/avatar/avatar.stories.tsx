import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarImg from '../../assets/images/avatar.jpg';
import { Avatar } from './avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: AvatarImg,
};
