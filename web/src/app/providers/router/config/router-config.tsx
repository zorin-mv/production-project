import { AboutPageAsync } from 'pages/about-page';
import { MainPageAsync } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { ProfilePageAsync } from 'pages/profile-page';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath, TAppRoutes } from 'shared/constant/app-routes';

export const routeConfig: Record<TAppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.PROFILE_PAGE]: {
    path: RoutePath.profile,
    element: <ProfilePageAsync />,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
};
