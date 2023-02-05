import { useTheme } from "app/providers/theme-provider/lib/useTheme";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/class-names/class-names";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toggle Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About us</Link>
      <AppRouter />
    </div>
  );
};
