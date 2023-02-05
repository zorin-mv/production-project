import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "app/providers/theme-provider/lib/theme.context";
import { FC, useMemo, useState } from "react";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const themeProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeProps}>{children}</ThemeContext.Provider>
  );
};
