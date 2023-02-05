import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "app/providers/theme-provider/lib/theme.context";
import { useContext } from "react";

interface IUseThemeResult {
  toogleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toogleTheme };
};
