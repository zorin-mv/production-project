import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PageLoader } from './page-loader';

export default {
  title: 'widget/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
  <PageLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
