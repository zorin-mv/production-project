import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CURRENCY } from 'shared/constant/common';
import { StoreDecorator } from 'shared/lib/storybook/store-decorator';

import { ProfileCard } from './profile-card';

export default {
  title: 'entities/profile/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StoreDecorator({
    profile: {
      data: {
        age: 20,
        avatar: '',
        city: 'Kharkiv',
        country: 'Ukraine',
        currency: CURRENCY.uah,
        firstName: 'Test',
        lastName: 'test',
        id: 'test-id',
      },
    },
  }),
];
