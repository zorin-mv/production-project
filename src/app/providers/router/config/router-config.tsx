import { AboutPageAsync } from 'pages/about-page';
import { MainPageAsync } from 'pages/main-page';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/constant';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
};
