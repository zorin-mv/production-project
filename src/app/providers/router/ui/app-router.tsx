import { routeConfig } from "app/providers/router";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={"Loading ..."}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
