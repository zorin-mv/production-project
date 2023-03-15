import { ComponentMeta, ComponentStory } from '@storybook/react';

import AboutPage from './about-page';

export default {
  title: 'pages/about-page',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Default = Template.bind({});
Default.args = {};
