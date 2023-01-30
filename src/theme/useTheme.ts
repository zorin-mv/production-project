import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./theme.context";

export interface IUseThemeResult {
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
