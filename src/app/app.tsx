import { classNames } from "shared/lib/class-names";
import { useTheme } from "shared/lib/theme/useTheme";
import "shared/styles/index.scss";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { NavBar } from "widgets/navbar";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <div className="container">
        <ThemeSwitcher />
        <NavBar />
        <AppRouter />
      </div>
    </div>
  );
};
