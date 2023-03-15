import { ComponentMeta, ComponentStory } from '@storybook/react';

import MainPage from './main-page';

export default {
  title: 'pages/main-page',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Default = Template.bind({});
Default.args = {};
