import { createContext } from 'react';

export const Theme = {
  LIGHT: 'app-light-theme',
  DARK: 'app-dark-theme',
} as const;

export type TTheme = ValueOf<typeof Theme>;

export interface IThemeContextProps {
  theme?: TTheme;
  setTheme?: (theme: TTheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
