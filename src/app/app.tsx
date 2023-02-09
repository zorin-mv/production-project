import { Suspense } from 'react';
import { classNames } from 'shared/lib/class-names';
import { useTheme } from 'shared/lib/theme/useTheme';
import 'shared/styles/index.scss';
import { NavBar } from 'widgets/navbar';
import { PageLoader } from 'widgets/page-loader';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
