import { addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes';
import { RouterDecorator } from '../../src/shared/lib/storybook/router-decorator';
import { StyleDecorator } from '../../src/shared/lib/storybook/style-decorator';
import { Theme } from '../../src/shared/lib/theme/theme.context';
import i18n from './i18next.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  themes: {
    default: Theme.LIGHT,
    clearable: false,
    list: [
      {
        name: Theme.LIGHT,
        class: ['app', 'storybook-app', Theme.LIGHT],
        color: '#e8e8ea',
      },
      {
        name: Theme.DARK,
        class: ['app', 'storybook-app', Theme.DARK],
        color: '#090949',
      },
    ],
  },
  i18n,
  locale: 'ru',
  locales: {
    en: 'English',
    ru: 'Русский',
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(withThemes);
