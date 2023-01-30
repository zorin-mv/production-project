import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "../../helpers/class-names/class-names";
import "../../styles/index.scss";
import { useTheme } from "../../theme/useTheme";
import { AboutPageAsync } from "../about-page";
import { MainPageAsync } from "../main-page";

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, ["theme"])}>
      <button onClick={toogleTheme}>Toggle Theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About us</Link>
      <Suspense fallback={"Loading ..."}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
