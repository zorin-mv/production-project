import { routeConfig } from 'app/providers/router';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';

export const AppRouter = () => (
  <div className="page-wrapper">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} element={<div className="page-wrapper">{element}</div>} path={path} />
        ))}
      </Routes>
    </Suspense>
  </div>
);
