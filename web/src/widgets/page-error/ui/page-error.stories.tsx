import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageError } from 'widgets/page-error';

export default {
  title: 'widget/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Default = Template.bind({});
Default.args = {};
