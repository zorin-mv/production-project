import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotFoundPage } from './not-found-page';

export default {
  title: 'pages/not-found-page',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Default = Template.bind({});
Default.args = {};
