import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const SizeM = Template.bind({});
SizeM.args = {
  children: 'Button',
  size: ButtonSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  children: 'Button',
  size: ButtonSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
  children: 'Button',
  size: ButtonSize.XL,
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
};
