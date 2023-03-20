import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, TTheme } from 'shared/lib/theme/theme.context';

interface IUseThemeResult {
  toogleTheme: () => void;
  theme?: TTheme;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.remove(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    document.body.classList.add(theme || Theme.LIGHT);
  }, [theme]);

  const toogleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
  };

  return { theme, toogleTheme };
};
