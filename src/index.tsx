import { App } from 'app/app';
import { ErrorBoundary } from 'app/providers/error-boundary';
import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import 'shared/styles/index.scss';
import { PageLoader } from 'widgets/page-loader';

import { ThemeProvider } from './app/providers/theme-provider';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={<PageLoader />}>
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
