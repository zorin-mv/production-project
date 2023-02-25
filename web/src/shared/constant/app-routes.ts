export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  NOT_FOUND: 'not-found',
} as const;

export type TAppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};
