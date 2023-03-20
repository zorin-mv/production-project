import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, TTheme } from 'shared/lib/theme/theme.context';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? Theme.LIGHT) as TTheme;

interface IThemeProvider {
  children?: ReactNode;
  initialTheme?: TTheme;
}

export const ThemeProvider = ({ children, initialTheme }: IThemeProvider) => {
  const [theme, setTheme] = useState<TTheme>(initialTheme ?? defaultTheme);

  const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>;
};
