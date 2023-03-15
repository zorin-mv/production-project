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

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
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

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
  isColorInverted: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
  isColorInverted: true,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
  isColorInverted: true,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
  isColorInverted: true,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
  isColorInverted: true,
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
  isColorInverted: true,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  square: true,
  theme: ButtonTheme.BACKGROUND,
  isColorInverted: true,
  size: ButtonSize.XL,
};
