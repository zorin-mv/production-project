import { addDecorator } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator';
import { Theme } from '../../src/shared/lib/theme/theme.context';
import i18n from './i18next.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  themes: [
    {
      name: Theme.LIGHT,
      class: ['app', Theme.LIGHT],
      default: true,
      color: '#e8e8ea',
    },
    { name: Theme.DARK, class: ['app', Theme.DARK], color: '#090949' },
  ],
  i18n,
  locale: 'ru',
  locales: {
    en: 'English',
    ru: 'Русский',
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
