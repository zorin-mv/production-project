import { routeConfig } from 'app/providers/router';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper">
      <Suspense fallback={t('loading')}>
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
