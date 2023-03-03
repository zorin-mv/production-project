export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE_PAGE: 'profile',

  // last
  NOT_FOUND: 'not-found',
} as const;

export type TAppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE_PAGE]: '/profile',

  // last
  [AppRoutes.NOT_FOUND]: '*',
};
