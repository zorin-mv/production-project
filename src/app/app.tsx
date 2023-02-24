import { classNames } from 'shared/lib/class-names';
import { useTheme } from 'shared/lib/theme/useTheme';
import { NavBar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { AppRouter } from './providers/router';

export const App = () => {
  useTheme();

  return (
    <div className={classNames('app')}>
      <NavBar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
