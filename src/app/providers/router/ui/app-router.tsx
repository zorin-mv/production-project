import { routeConfig } from "app/providers/router";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={"Loading ..."}>
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route
              key={path}
              element={<div className="page-wrapper">{element}</div>}
              path={path}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
