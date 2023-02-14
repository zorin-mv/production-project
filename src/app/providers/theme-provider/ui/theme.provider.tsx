import { FC, ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
  TTheme,
} from 'shared/lib/theme/theme.context';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || Theme.LIGHT;

interface IThemeProvider {
  children?: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};
